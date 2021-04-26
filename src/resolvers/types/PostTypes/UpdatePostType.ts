import { Field, InputType, ObjectType } from "type-graphql";

import { Post } from "../../../entities/Post";
import { User } from "../../../entities/User";

@InputType()
export class UpdatePostInputType implements Partial<Post> {
	@Field()
	id!: string;

	@Field({ nullable: true })
	champion?: string;

	@Field({ nullable: true })
	title?: string;

	@Field({ nullable: true })
	description?: string;

	@Field({ nullable: true })
	skills?: string;

	@Field({ nullable: true })
	play?: string;

	@Field({ nullable: true })
	etc?: string;
}

@ObjectType()
export class UpdatePostResponseType {
	@Field(() => Post)
	post: Post;

	@Field(() => User)
	user: User;
}
