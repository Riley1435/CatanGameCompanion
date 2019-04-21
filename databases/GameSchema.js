// >react-native link realm

import Realm from 'realm';
export const GAMELIST_SCHEMA = 'GameList';
export const GAME_SCHEMA = 'Game';

export const GameSchema = {
    name: GAME_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int',
        rollCount: 'int',
    }
};

export const GameListSchema = {
    name: GAMELIST_SCHEMA,
    primaryKey: 'id',
    properties: {
        id: 'int',
        creationDate: 'date',
        name1: 'string',
        name2: 'string',
        name3: 'string',
        name4: 'string',
        name5: 'string',
        name6: 'string',
        games: {type: 'list', objectType: GAME_SCHEMA },
    }
};

const gameDB = {
    schema: [GameListSchema, GameSchema],
    schemaVersion: 0,
};

export const insertNewGame = newGameList => {
    Realm.open(gameDB).then(realm => {
        realm.write(() => {
            realm.create(GAMELIST_SCHEMA, newGameList);
        });
    });
};

export const getAllGames = () => new Promise((resolve, reject) => {
    Realm.open(gameDB).then(realm => {
        let allGameLists = realm.objects(GAMELIST_SCHEMA).sorted('creationDate', true);
        resolve(allGameLists);
    }).catch((error) => {
        reject(error);
    });;
});

export const deleteAllGameLists = () => new Promise((resolve, reject) => {
    Realm.open(gameDB).then(realm => {
        realm.write(() => {
            let allGameLists = realm.objects(GAMELIST_SCHEMA);
            realm.delete(allGameLists);
            resolve();
        });
    }).catch((error) => reject(error));;
});

export default new Realm(gameDB);