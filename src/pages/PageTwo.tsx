interface PageTwoProps {
  id: string;
}

export default function PageTwo({ id }: PageTwoProps) {
  return <div>{id}</div>;
}
