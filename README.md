 <h1 align="center">Typescript</h1>
 <p> Typescript is syntactic superset of Javascript which adds static types. This basically means  that typescript adds syntax on top of Javascript which allowing developers to assign types.
</p>

<h3>Interface vs Types</h3>
<p>Typescript allows types to be defined separately from the variable that use them. Interface and Types or Type Aliases allows types to be easily shared between different variables or objects. Interface can extend other interfaces but not types and on the other hand Type can extend interfaces and types both. Interface automatically merges declarations but Type cant do that. Interface used for defining object shapes but Type used for more versatile and also used for primitives, union etc. Interface syntax is not flexible like type. Interface only allows object structures and on the other side type allows unions, intersections and tuples</p>

<h3>KeyOf</h3>
<p>keyof is very useful and flexible keyword for accessing the property names of an object in an union format. It can be used in several way, but one useful way is for optional property.</p>
<pre> <code>type User = {
  id: number;
  name: string;
};

type UserKeys = keyof User; // 'id' | 'name'

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user: User = { id: 1, name: "Alice" };
const userName = getValue(user, "name"); // "Alice"
</code> </pre>
