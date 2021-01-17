import { fetchProfileData } from "./fake-api";
const resource = fetchProfileData();

export function ProfileDetails() {
  return {
    render() {
      // Try to read user info, although it might not have loaded yet
      const user = resource.user.read("user-1");
      return <h1>{user.name}</h1>;
    },
  };
}

export function ProfileTimeline() {
  return {
    render() {
      // Try to read posts, although they might not have loaded yet
      const posts = resource.posts.read("user-1-posts");
      return (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.text}</li>
          ))}
        </ul>
      );
    },
  };
}
