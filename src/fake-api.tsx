interface User {
  name: string;
}

interface Post {
  id: number;
  text: string;
}

export function fetchProfileData() {
  const promiseCache: { [key: string]: Promise<any> } = {};
  const resultCache: { [key: string]: any } = {};

  return {
    user: wrapPromiseFunc<User>(fetchUser, promiseCache, resultCache),
    posts: wrapPromiseFunc(fetchPosts, promiseCache, resultCache),
  };
}

function wrapPromiseFunc<T>(
  promiseFunc: () => Promise<T>,
  promiseCache: { [key: string]: Promise<any> },
  resultCache: { [key: string]: any }

): { read: (id: string) => T } {
  let status = "";
  let result: T;
  let suspender: Promise<void>;

  const init = (id: string) => {
    if (id in resultCache) {
      status = "success";
      result = resultCache[id];
      return;
    }

    status = "pending";
    const promise = promiseCache[id] || promiseFunc();
    promiseCache[id] = promise;
    suspender = promise.then(
      (r) => {
        status = "success";
        result = r;
      },
      (e) => {
        status = "error";
        result = e;
      }
    );
  };

  return {
    read(id: string) {
      if (!status) {
        init(id);
      }

      if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }

      throw suspender;
    },
  };
}

function fetchUser(): Promise<User> {
  console.log("fetch user...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("fetched user");
      resolve({
        name: "Ringo Starr",
      });
    }, 1000);
  });
}

function fetchPosts(): Promise<Post[]> {
  console.log("fetch posts...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("fetched posts");
      resolve([
        {
          id: 0,
          text: "I get by with a little help from my friends",
        },
        {
          id: 1,
          text: "I'd like to be under the sea in an octupus's garden",
        },
        {
          id: 2,
          text: "You got that sand all over your feet",
        },
      ]);
    }, 2000);
  });
}
