// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class StakeSet extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save StakeSet entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save StakeSet entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("StakeSet", id.toString(), this);
  }

  static load(id: string): StakeSet | null {
    return store.get("StakeSet", id) as StakeSet | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get subcourtID(): BigInt {
    let value = this.get("subcourtID");
    return value.toBigInt();
  }

  set subcourtID(value: BigInt) {
    this.set("subcourtID", Value.fromBigInt(value));
  }

  get stake(): BigInt {
    let value = this.get("stake");
    return value.toBigInt();
  }

  set stake(value: BigInt) {
    this.set("stake", Value.fromBigInt(value));
  }

  get newTotalStake(): BigInt {
    let value = this.get("newTotalStake");
    return value.toBigInt();
  }

  set newTotalStake(value: BigInt) {
    this.set("newTotalStake", Value.fromBigInt(value));
  }
}

export class Dispute extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Dispute entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Dispute entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Dispute", id.toString(), this);
  }

  static load(id: string): Dispute | null {
    return store.get("Dispute", id) as Dispute | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get arbitrable(): Bytes {
    let value = this.get("arbitrable");
    return value.toBytes();
  }

  set arbitrable(value: Bytes) {
    this.set("arbitrable", Value.fromBytes(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get subcourtID(): BigInt {
    let value = this.get("subcourtID");
    return value.toBigInt();
  }

  set subcourtID(value: BigInt) {
    this.set("subcourtID", Value.fromBigInt(value));
  }

  get numberOfChoices(): BigInt {
    let value = this.get("numberOfChoices");
    return value.toBigInt();
  }

  set numberOfChoices(value: BigInt) {
    this.set("numberOfChoices", Value.fromBigInt(value));
  }

  get period(): string {
    let value = this.get("period");
    return value.toString();
  }

  set period(value: string) {
    this.set("period", Value.fromString(value));
  }

  get startTime(): BigInt {
    let value = this.get("startTime");
    return value.toBigInt();
  }

  set startTime(value: BigInt) {
    this.set("startTime", Value.fromBigInt(value));
  }

  get lastPeriodChange(): BigInt {
    let value = this.get("lastPeriodChange");
    return value.toBigInt();
  }

  set lastPeriodChange(value: BigInt) {
    this.set("lastPeriodChange", Value.fromBigInt(value));
  }

  get rounds(): Array<string> | null {
    let value = this.get("rounds");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set rounds(value: Array<string> | null) {
    if (value === null) {
      this.unset("rounds");
    } else {
      this.set("rounds", Value.fromStringArray(value as Array<string>));
    }
  }

  get ruled(): boolean {
    let value = this.get("ruled");
    return value.toBoolean();
  }

  set ruled(value: boolean) {
    this.set("ruled", Value.fromBoolean(value));
  }

  get currentRulling(): BigInt | null {
    let value = this.get("currentRulling");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set currentRulling(value: BigInt | null) {
    if (value === null) {
      this.unset("currentRulling");
    } else {
      this.set("currentRulling", Value.fromBigInt(value as BigInt));
    }
  }

  get jurorsInvolved(): Array<string> | null {
    let value = this.get("jurorsInvolved");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set jurorsInvolved(value: Array<string> | null) {
    if (value === null) {
      this.unset("jurorsInvolved");
    } else {
      this.set("jurorsInvolved", Value.fromStringArray(value as Array<string>));
    }
  }

  get metaevidente(): string | null {
    let value = this.get("metaevidente");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set metaevidente(value: string | null) {
    if (value === null) {
      this.unset("metaevidente");
    } else {
      this.set("metaevidente", Value.fromString(value as string));
    }
  }
}

export class Round extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Round entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Round entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Round", id.toString(), this);
  }

  static load(id: string): Round | null {
    return store.get("Round", id) as Round | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get dispute(): string {
    let value = this.get("dispute");
    return value.toString();
  }

  set dispute(value: string) {
    this.set("dispute", Value.fromString(value));
  }

  get votes(): Array<string> {
    let value = this.get("votes");
    return value.toStringArray();
  }

  set votes(value: Array<string>) {
    this.set("votes", Value.fromStringArray(value));
  }

  get winningChoice(): BigInt {
    let value = this.get("winningChoice");
    return value.toBigInt();
  }

  set winningChoice(value: BigInt) {
    this.set("winningChoice", Value.fromBigInt(value));
  }

  get startTime(): BigInt {
    let value = this.get("startTime");
    return value.toBigInt();
  }

  set startTime(value: BigInt) {
    this.set("startTime", Value.fromBigInt(value));
  }
}

export class Vote extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Vote entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Vote entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Vote", id.toString(), this);
  }

  static load(id: string): Vote | null {
    return store.get("Vote", id) as Vote | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get dispute(): string {
    let value = this.get("dispute");
    return value.toString();
  }

  set dispute(value: string) {
    this.set("dispute", Value.fromString(value));
  }

  get round(): string {
    let value = this.get("round");
    return value.toString();
  }

  set round(value: string) {
    this.set("round", Value.fromString(value));
  }

  get voteID(): BigInt {
    let value = this.get("voteID");
    return value.toBigInt();
  }

  set voteID(value: BigInt) {
    this.set("voteID", Value.fromBigInt(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get choice(): BigInt | null {
    let value = this.get("choice");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set choice(value: BigInt | null) {
    if (value === null) {
      this.unset("choice");
    } else {
      this.set("choice", Value.fromBigInt(value as BigInt));
    }
  }

  get voted(): boolean {
    let value = this.get("voted");
    return value.toBoolean();
  }

  set voted(value: boolean) {
    this.set("voted", Value.fromBoolean(value));
  }

  get salt(): BigInt | null {
    let value = this.get("salt");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set salt(value: BigInt | null) {
    if (value === null) {
      this.unset("salt");
    } else {
      this.set("salt", Value.fromBigInt(value as BigInt));
    }
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(value as BigInt));
    }
  }
}

export class NewPeriod extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save NewPeriod entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save NewPeriod entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("NewPeriod", id.toString(), this);
  }

  static load(id: string): NewPeriod | null {
    return store.get("NewPeriod", id) as NewPeriod | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get disputeId(): BigInt {
    let value = this.get("disputeId");
    return value.toBigInt();
  }

  set disputeId(value: BigInt) {
    this.set("disputeId", Value.fromBigInt(value));
  }

  get newPeriod(): string {
    let value = this.get("newPeriod");
    return value.toString();
  }

  set newPeriod(value: string) {
    this.set("newPeriod", Value.fromString(value));
  }
}

export class Draw extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Draw entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Draw entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Draw", id.toString(), this);
  }

  static load(id: string): Draw | null {
    return store.get("Draw", id) as Draw | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get disputeId(): BigInt {
    let value = this.get("disputeId");
    return value.toBigInt();
  }

  set disputeId(value: BigInt) {
    this.set("disputeId", Value.fromBigInt(value));
  }

  get roundNumber(): BigInt {
    let value = this.get("roundNumber");
    return value.toBigInt();
  }

  set roundNumber(value: BigInt) {
    this.set("roundNumber", Value.fromBigInt(value));
  }

  get voteId(): BigInt {
    let value = this.get("voteId");
    return value.toBigInt();
  }

  set voteId(value: BigInt) {
    this.set("voteId", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Juror extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Juror entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Juror entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Juror", id.toString(), this);
  }

  static load(id: string): Juror | null {
    return store.get("Juror", id) as Juror | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get subcourtsIDs(): Array<BigInt> | null {
    let value = this.get("subcourtsIDs");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigIntArray();
    }
  }

  set subcourtsIDs(value: Array<BigInt> | null) {
    if (value === null) {
      this.unset("subcourtsIDs");
    } else {
      this.set("subcourtsIDs", Value.fromBigIntArray(value as Array<BigInt>));
    }
  }

  get totalStaked(): BigInt {
    let value = this.get("totalStaked");
    return value.toBigInt();
  }

  set totalStaked(value: BigInt) {
    this.set("totalStaked", Value.fromBigInt(value));
  }

  get activeJuror(): boolean {
    let value = this.get("activeJuror");
    return value.toBoolean();
  }

  set activeJuror(value: boolean) {
    this.set("activeJuror", Value.fromBoolean(value));
  }

  get disputesAsJuror(): Array<string> | null {
    let value = this.get("disputesAsJuror");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set disputesAsJuror(value: Array<string> | null) {
    if (value === null) {
      this.unset("disputesAsJuror");
    } else {
      this.set(
        "disputesAsJuror",
        Value.fromStringArray(value as Array<string>)
      );
    }
  }

  get numberOfDisputesCreated(): BigInt {
    let value = this.get("numberOfDisputesCreated");
    return value.toBigInt();
  }

  set numberOfDisputesCreated(value: BigInt) {
    this.set("numberOfDisputesCreated", Value.fromBigInt(value));
  }

  get votes(): Array<string> | null {
    let value = this.get("votes");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set votes(value: Array<string> | null) {
    if (value === null) {
      this.unset("votes");
    } else {
      this.set("votes", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class TokenAndETHShift extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TokenAndETHShift entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenAndETHShift entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenAndETHShift", id.toString(), this);
  }

  static load(id: string): TokenAndETHShift | null {
    return store.get("TokenAndETHShift", id) as TokenAndETHShift | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get disputeId(): BigInt {
    let value = this.get("disputeId");
    return value.toBigInt();
  }

  set disputeId(value: BigInt) {
    this.set("disputeId", Value.fromBigInt(value));
  }

  get tokenAmount(): BigInt {
    let value = this.get("tokenAmount");
    return value.toBigInt();
  }

  set tokenAmount(value: BigInt) {
    this.set("tokenAmount", Value.fromBigInt(value));
  }

  get ETHAmount(): BigInt {
    let value = this.get("ETHAmount");
    return value.toBigInt();
  }

  set ETHAmount(value: BigInt) {
    this.set("ETHAmount", Value.fromBigInt(value));
  }
}

export class PolicyUpdate extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save PolicyUpdate entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save PolicyUpdate entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("PolicyUpdate", id.toString(), this);
  }

  static load(id: string): PolicyUpdate | null {
    return store.get("PolicyUpdate", id) as PolicyUpdate | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get subcourtID(): BigInt {
    let value = this.get("subcourtID");
    return value.toBigInt();
  }

  set subcourtID(value: BigInt) {
    this.set("subcourtID", Value.fromBigInt(value));
  }

  get policy(): string {
    let value = this.get("policy");
    return value.toString();
  }

  set policy(value: string) {
    this.set("policy", Value.fromString(value));
  }

  get contractAddress(): Bytes {
    let value = this.get("contractAddress");
    return value.toBytes();
  }

  set contractAddress(value: Bytes) {
    this.set("contractAddress", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }
}
