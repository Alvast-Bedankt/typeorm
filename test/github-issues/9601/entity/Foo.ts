import {
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "../../../../src"

@Entity({ name: "foo", schema: "SYSTEM" })
export class Foo {
    @PrimaryGeneratedColumn({ name: "id" })
    id: number

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date
}
