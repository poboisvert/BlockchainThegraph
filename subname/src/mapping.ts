import { BigInt } from '@graphprotocol/graph-ts';
import {
  FlipContract,
  OwnershipTransferred,
  bet,
  funded,
} from '../generated/FlipContract/FlipContract';
import { ExampleEntity } from '../generated/schema';

export function handlebet(event: bet): void {
  let entity = ExampleEntity.load(event.transaction.from.toHex());

  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex());
  }

  entity.bet = event.params.bet;
  entity.win = event.params.win;
  entity.side = event.params.side;

  entity.save();
}

export function handlefunded(event: funded): void {}
