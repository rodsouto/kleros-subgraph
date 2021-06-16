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

export class Court extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Court entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Court entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Court", id.toString(), this);
  }

  static load(id: string): Court | null {
    return store.get("Court", id) as Court | null;
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

  get disputesNum(): BigInt {
    let value = this.get("disputesNum");
    return value.toBigInt();
  }

  set disputesNum(value: BigInt) {
    this.set("disputesNum", Value.fromBigInt(value));
  }

  get disputesClosed(): BigInt {
    let value = this.get("disputesClosed");
    return value.toBigInt();
  }

  set disputesClosed(value: BigInt) {
    this.set("disputesClosed", Value.fromBigInt(value));
  }

  get disputesOngoing(): BigInt {
    let value = this.get("disputesOngoing");
    return value.toBigInt();
  }

  set disputesOngoing(value: BigInt) {
    this.set("disputesOngoing", Value.fromBigInt(value));
  }

  get disputes(): Array<string> | null {
    let value = this.get("disputes");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set disputes(value: Array<string> | null) {
    if (value === null) {
      this.unset("disputes");
    } else {
      this.set("disputes", Value.fromStringArray(value as Array<string>));
    }
  }

  get jurors(): Array<string> | null {
    let value = this.get("jurors");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set jurors(value: Array<string> | null) {
    if (value === null) {
      this.unset("jurors");
    } else {
      this.set("jurors", Value.fromStringArray(value as Array<string>));
    }
  }

  get childs(): Array<string> | null {
    let value = this.get("childs");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set childs(value: Array<string> | null) {
    if (value === null) {
      this.unset("childs");
    } else {
      this.set("childs", Value.fromStringArray(value as Array<string>));
    }
  }

  get parent(): string | null {
    let value = this.get("parent");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set parent(value: string | null) {
    if (value === null) {
      this.unset("parent");
    } else {
      this.set("parent", Value.fromString(value as string));
    }
  }

  get policy(): string | null {
    let value = this.get("policy");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set policy(value: string | null) {
    if (value === null) {
      this.unset("policy");
    } else {
      this.set("policy", Value.fromString(value as string));
    }
  }

  get activeJurors(): BigInt {
    let value = this.get("activeJurors");
    return value.toBigInt();
  }

  set activeJurors(value: BigInt) {
    this.set("activeJurors", Value.fromBigInt(value));
  }

  get tokenStaked(): BigInt {
    let value = this.get("tokenStaked");
    return value.toBigInt();
  }

  set tokenStaked(value: BigInt) {
    this.set("tokenStaked", Value.fromBigInt(value));
  }

  get hiddenVotes(): boolean {
    let value = this.get("hiddenVotes");
    return value.toBoolean();
  }

  set hiddenVotes(value: boolean) {
    this.set("hiddenVotes", Value.fromBoolean(value));
  }

  get minStake(): BigInt {
    let value = this.get("minStake");
    return value.toBigInt();
  }

  set minStake(value: BigInt) {
    this.set("minStake", Value.fromBigInt(value));
  }

  get alpha(): BigInt {
    let value = this.get("alpha");
    return value.toBigInt();
  }

  set alpha(value: BigInt) {
    this.set("alpha", Value.fromBigInt(value));
  }

  get feeForJuror(): BigInt {
    let value = this.get("feeForJuror");
    return value.toBigInt();
  }

  set feeForJuror(value: BigInt) {
    this.set("feeForJuror", Value.fromBigInt(value));
  }

  get jurorsForCourtJump(): BigInt {
    let value = this.get("jurorsForCourtJump");
    return value.toBigInt();
  }

  set jurorsForCourtJump(value: BigInt) {
    this.set("jurorsForCourtJump", Value.fromBigInt(value));
  }

  get timePeriods(): Array<BigInt> {
    let value = this.get("timePeriods");
    return value.toBigIntArray();
  }

  set timePeriods(value: Array<BigInt>) {
    this.set("timePeriods", Value.fromBigIntArray(value));
  }
}

export class KlerosCounter extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save KlerosCounter entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save KlerosCounter entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("KlerosCounter", id.toString(), this);
  }

  static load(id: string): KlerosCounter | null {
    return store.get("KlerosCounter", id) as KlerosCounter | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get courtsCount(): BigInt {
    let value = this.get("courtsCount");
    return value.toBigInt();
  }

  set courtsCount(value: BigInt) {
    this.set("courtsCount", Value.fromBigInt(value));
  }

  get disputesCount(): BigInt {
    let value = this.get("disputesCount");
    return value.toBigInt();
  }

  set disputesCount(value: BigInt) {
    this.set("disputesCount", Value.fromBigInt(value));
  }

  get openDisputes(): BigInt {
    let value = this.get("openDisputes");
    return value.toBigInt();
  }

  set openDisputes(value: BigInt) {
    this.set("openDisputes", Value.fromBigInt(value));
  }

  get closedDisputes(): BigInt {
    let value = this.get("closedDisputes");
    return value.toBigInt();
  }

  set closedDisputes(value: BigInt) {
    this.set("closedDisputes", Value.fromBigInt(value));
  }

  get evidencePhaseDisputes(): BigInt {
    let value = this.get("evidencePhaseDisputes");
    return value.toBigInt();
  }

  set evidencePhaseDisputes(value: BigInt) {
    this.set("evidencePhaseDisputes", Value.fromBigInt(value));
  }

  get votingPhaseDisputes(): BigInt {
    let value = this.get("votingPhaseDisputes");
    return value.toBigInt();
  }

  set votingPhaseDisputes(value: BigInt) {
    this.set("votingPhaseDisputes", Value.fromBigInt(value));
  }

  get appealPhaseDisputes(): BigInt {
    let value = this.get("appealPhaseDisputes");
    return value.toBigInt();
  }

  set appealPhaseDisputes(value: BigInt) {
    this.set("appealPhaseDisputes", Value.fromBigInt(value));
  }

  get activeJurors(): BigInt {
    let value = this.get("activeJurors");
    return value.toBigInt();
  }

  set activeJurors(value: BigInt) {
    this.set("activeJurors", Value.fromBigInt(value));
  }

  get inactiveJurors(): BigInt {
    let value = this.get("inactiveJurors");
    return value.toBigInt();
  }

  set inactiveJurors(value: BigInt) {
    this.set("inactiveJurors", Value.fromBigInt(value));
  }

  get drawnJurors(): BigInt {
    let value = this.get("drawnJurors");
    return value.toBigInt();
  }

  set drawnJurors(value: BigInt) {
    this.set("drawnJurors", Value.fromBigInt(value));
  }

  get tokenStaked(): BigInt {
    let value = this.get("tokenStaked");
    return value.toBigInt();
  }

  set tokenStaked(value: BigInt) {
    this.set("tokenStaked", Value.fromBigInt(value));
  }

  get totalETHFees(): BigInt {
    let value = this.get("totalETHFees");
    return value.toBigInt();
  }

  set totalETHFees(value: BigInt) {
    this.set("totalETHFees", Value.fromBigInt(value));
  }

  get totalPNKredistributed(): BigInt {
    let value = this.get("totalPNKredistributed");
    return value.toBigInt();
  }

  set totalPNKredistributed(value: BigInt) {
    this.set("totalPNKredistributed", Value.fromBigInt(value));
  }

  get totalUSDthroughContract(): BigInt {
    let value = this.get("totalUSDthroughContract");
    return value.toBigInt();
  }

  set totalUSDthroughContract(value: BigInt) {
    this.set("totalUSDthroughContract", Value.fromBigInt(value));
  }
}

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

  get address(): string {
    let value = this.get("address");
    return value.toString();
  }

  set address(value: string) {
    this.set("address", Value.fromString(value));
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

  get subcourtsIDs(): Array<string> | null {
    let value = this.get("subcourtsIDs");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set subcourtsIDs(value: Array<string> | null) {
    if (value === null) {
      this.unset("subcourtsIDs");
    } else {
      this.set("subcourtsIDs", Value.fromStringArray(value as Array<string>));
    }
  }

  get currentStakes(): Array<string> | null {
    let value = this.get("currentStakes");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set currentStakes(value: Array<string> | null) {
    if (value === null) {
      this.unset("currentStakes");
    } else {
      this.set("currentStakes", Value.fromStringArray(value as Array<string>));
    }
  }

  get allStakes(): Array<string> | null {
    let value = this.get("allStakes");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set allStakes(value: Array<string> | null) {
    if (value === null) {
      this.unset("allStakes");
    } else {
      this.set("allStakes", Value.fromStringArray(value as Array<string>));
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

  get numberOfDisputesAsJuror(): BigInt {
    let value = this.get("numberOfDisputesAsJuror");
    return value.toBigInt();
  }

  set numberOfDisputesAsJuror(value: BigInt) {
    this.set("numberOfDisputesAsJuror", Value.fromBigInt(value));
  }

  get disputesAsCreator(): Array<string> | null {
    let value = this.get("disputesAsCreator");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set disputesAsCreator(value: Array<string> | null) {
    if (value === null) {
      this.unset("disputesAsCreator");
    } else {
      this.set(
        "disputesAsCreator",
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

export class CourtStake extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save CourtStake entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save CourtStake entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("CourtStake", id.toString(), this);
  }

  static load(id: string): CourtStake | null {
    return store.get("CourtStake", id) as CourtStake | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get court(): string {
    let value = this.get("court");
    return value.toString();
  }

  set court(value: string) {
    this.set("court", Value.fromString(value));
  }

  get juror(): string {
    let value = this.get("juror");
    return value.toString();
  }

  set juror(value: string) {
    this.set("juror", Value.fromString(value));
  }

  get stake(): BigInt {
    let value = this.get("stake");
    return value.toBigInt();
  }

  set stake(value: BigInt) {
    this.set("stake", Value.fromBigInt(value));
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

  get txid(): Bytes {
    let value = this.get("txid");
    return value.toBytes();
  }

  set txid(value: Bytes) {
    this.set("txid", Value.fromBytes(value));
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

  get disputeID(): BigInt {
    let value = this.get("disputeID");
    return value.toBigInt();
  }

  set disputeID(value: BigInt) {
    this.set("disputeID", Value.fromBigInt(value));
  }

  get arbitrable(): Bytes {
    let value = this.get("arbitrable");
    return value.toBytes();
  }

  set arbitrable(value: Bytes) {
    this.set("arbitrable", Value.fromBytes(value));
  }

  get creator(): string {
    let value = this.get("creator");
    return value.toString();
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
  }

  get subcourtID(): string {
    let value = this.get("subcourtID");
    return value.toString();
  }

  set subcourtID(value: string) {
    this.set("subcourtID", Value.fromString(value));
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

  get txid(): Bytes {
    let value = this.get("txid");
    return value.toBytes();
  }

  set txid(value: Bytes) {
    this.set("txid", Value.fromBytes(value));
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

  get address(): string {
    let value = this.get("address");
    return value.toString();
  }

  set address(value: string) {
    this.set("address", Value.fromString(value));
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
