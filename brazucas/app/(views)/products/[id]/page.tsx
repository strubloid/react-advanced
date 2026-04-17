import ViewProduct from "@app/views/products/view-products";

type Props = {
    params: Promise<{ id: string }>;
};

export default async function Page({ params }: Props) {
    const { id } = await params;
    return <ViewProduct id={id} />;
}
