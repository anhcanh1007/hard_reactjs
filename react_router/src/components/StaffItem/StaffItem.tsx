import { useOutletContext, useParams } from "react-router-dom";

export default function StaffItem() {
  const { id } = useParams();
  const tex = useOutletContext();
  console.log(tex);
  return <div>StaffItem {id}</div>;
}
