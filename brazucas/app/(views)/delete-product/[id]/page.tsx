import DeleteProduct from "../../../products/delete-product";

type Props = {
    params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
    const { id } = await params;
    return <DeleteProduct id={id} />;
}
