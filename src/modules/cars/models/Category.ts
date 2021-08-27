import { v4 as uuid4 } from "uuid";

class Category {
    id?: string;
    name: string | undefined;
    description: string | undefined;
    created_at: Date | undefined;

    constructor() {
        if (!this.id) {
            this.id = uuid4();

        }
    }
}

export { Category };
