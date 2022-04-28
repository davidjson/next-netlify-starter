import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();

  return <span onClick={() => router.back()}>Click here to go back</span>;
}
