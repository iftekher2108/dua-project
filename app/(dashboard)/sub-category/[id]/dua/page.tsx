import Dua from "./dua";
type params = {
    id: number

}
export default function Page(props:{params:params}) {
    const { id } = props.params;
    return(
        <>
        <Dua cat_id={id} />
        </>
    )
}
