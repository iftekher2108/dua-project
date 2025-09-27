import SubCat from "./subCat";

type Params = {
    id: number
}
export default function Page(props:{params:Params}) {
    const { id } = props.params;

    return(
        <>
            <SubCat id={id} />
        </>
    )
}
