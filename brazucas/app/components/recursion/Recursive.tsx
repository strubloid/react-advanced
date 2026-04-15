import { BasicValidation } from "@/app/services/BasicValidation";

/**
 * Recursive component will be responsible to render any kind of nested object,
 * it will be checking if the data is an object, if it is not it will render the value,
 * if it is an object, it will render its key value pairs, and for each value 
 * it will call itself recursively.
 * @param data - the data to be rendered, it can be any kind of nested object
 * @returns a JSX element representing the rendered data
 * 
 * Example of usage:
 * <RecursiveComponent data={NestedObject} />
 * where NestedObject is defined as:
 * const NestedObject ={
 *     key1: "value1",
 *     key2: {
 *         innerkey1: "innervalue1",
 *         innerkey2: {
 *             innerinnerkey1: "innerinnervalue1",
 *             innerinnerkey2: "innerinnervalue2"
 *         }
 *     },
 *     key3: "value3"
 * }
 */
export const RecursiveComponent = ({ data }: { data: any }) => {

    // if the data is an object, we will render its key value pairs
    if (!BasicValidation.isObject({data})) {
        return (
            <li>{data}</li>
        );
    }

    // we get the key value pairs of the object
    const pairs = Object.entries(data);

    return (
        <>
            {pairs.map( ([key, value]) => {
                return (
                    <li key={key}>
                        {key}: 
                        <ul>
                            <RecursiveComponent data={value} />
                        </ul>
                    </li>
                )
            } )}
        </>
    );
}