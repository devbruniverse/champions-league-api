import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
import * as PlayerRepostory from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
  const data = await PlayerRepostory.findAllPlayers();
  let response = await HttpResponse.noContent();;

  if (!!data) {
    response = await HttpResponse.ok(data);
  }

  return response;
};

export const getPlayerByIdService = async (id: number) => {
  const data = await PlayerRepostory.findPlayerById(id);
  let response = await HttpResponse.noContent();

  if (!!data) {
    response = await HttpResponse.ok(data);
  }

  return response;
};

export const createPlayerService = async (player: PlayerModel) => {
  let response = null;

  if (!!Object.keys(player).length) {
    await PlayerRepostory.insertPlayer(player);
    response = await HttpResponse.created();
  } else {
    response = await HttpResponse.badRequest();
  }

  return response;
};

export const deletePlayerService = async (id: number) => {
  let response = null;
  const isDeleted = await PlayerRepostory.deleteOnePlayer(id);

  if (isDeleted) {
    response = await HttpResponse.ok({ message: "deleted" });
  } else {
    response = await HttpResponse.badRequest();
  }

  return response;
};

export const updatePlayerService = async (
  id: number,
  statistics: StatisticsModel
) => {
  const data = await PlayerRepostory.findAndModifyPlayer(id, statistics);
  let response = null;

  if (!!Object.keys(data).length) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.badRequest();
  }

  return response;
};
