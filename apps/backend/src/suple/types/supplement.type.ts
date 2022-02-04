export abstract class Neo4jNode {
  label: string;
}

export class Supplement extends Neo4jNode {
  id: string;
  name: string;
  description: string;
}
