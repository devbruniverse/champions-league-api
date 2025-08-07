import * as HttpResponse from "../utils/http-helper";
import * as repository from "../repositories/clubs-repository";

export const getClubService = async () => {
  const data = await repository.findAllClubs();
  return HttpResponse.ok(data);
};
