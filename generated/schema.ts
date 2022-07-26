// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Proposal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Proposal entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Proposal must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Proposal", id.toString(), this);
    }
  }

  static load(id: string): Proposal | null {
    return changetype<Proposal | null>(store.get("Proposal", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get result(): string {
    let value = this.get("result");
    return value!.toString();
  }

  set result(value: string) {
    this.set("result", Value.fromString(value));
  }

  get proposer(): string {
    let value = this.get("proposer");
    return value!.toString();
  }

  set proposer(value: string) {
    this.set("proposer", Value.fromString(value));
  }

  get votes(): Array<string> {
    let value = this.get("votes");
    return value!.toStringArray();
  }

  set votes(value: Array<string>) {
    this.set("votes", Value.fromStringArray(value));
  }

  get startTimestamp(): BigInt {
    let value = this.get("startTimestamp");
    return value!.toBigInt();
  }

  set startTimestamp(value: BigInt) {
    this.set("startTimestamp", Value.fromBigInt(value));
  }

  get yesCount(): BigInt {
    let value = this.get("yesCount");
    return value!.toBigInt();
  }

  set yesCount(value: BigInt) {
    this.set("yesCount", Value.fromBigInt(value));
  }

  get noCount(): BigInt {
    let value = this.get("noCount");
    return value!.toBigInt();
  }

  set noCount(value: BigInt) {
    this.set("noCount", Value.fromBigInt(value));
  }

  get isFinalized(): boolean {
    let value = this.get("isFinalized");
    return value!.toBoolean();
  }

  set isFinalized(value: boolean) {
    this.set("isFinalized", Value.fromBoolean(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get votes(): Array<string> {
    let value = this.get("votes");
    return value!.toStringArray();
  }

  set votes(value: Array<string>) {
    this.set("votes", Value.fromStringArray(value));
  }

  get proposals(): Array<string> {
    let value = this.get("proposals");
    return value!.toStringArray();
  }

  set proposals(value: Array<string>) {
    this.set("proposals", Value.fromStringArray(value));
  }
}

export class EntityVote extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save EntityVote entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type EntityVote must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("EntityVote", id.toString(), this);
    }
  }

  static load(id: string): EntityVote | null {
    return changetype<EntityVote | null>(store.get("EntityVote", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get voter(): string {
    let value = this.get("voter");
    return value!.toString();
  }

  set voter(value: string) {
    this.set("voter", Value.fromString(value));
  }

  get proposal(): string {
    let value = this.get("proposal");
    return value!.toString();
  }

  set proposal(value: string) {
    this.set("proposal", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get option(): string {
    let value = this.get("option");
    return value!.toString();
  }

  set option(value: string) {
    this.set("option", Value.fromString(value));
  }

  get weight(): BigInt {
    let value = this.get("weight");
    return value!.toBigInt();
  }

  set weight(value: BigInt) {
    this.set("weight", Value.fromBigInt(value));
  }

  get removed(): boolean {
    let value = this.get("removed");
    return value!.toBoolean();
  }

  set removed(value: boolean) {
    this.set("removed", Value.fromBoolean(value));
  }
}
