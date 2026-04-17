import EditProduct from "@app/views/products/edit-product";

type Props = {
    params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
    const { id } = await params;
    return <EditProduct id={id} />;
}
