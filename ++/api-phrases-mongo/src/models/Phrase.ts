import {Schema, model, Model, connection} from 'mongoose';

type PhraseType = {
    id: string,
    author: string,
    txt: string
};

const schema = new Schema<PhraseType>({
    author: {type: String, required: true, default: 'Desconhecido'},
    txt: {type: String, required: true}
});

const modelName: string= 'Phrase';

export default (connection && connection.models[modelName])? connection.models[modelName] as Model<PhraseType>: model<PhraseType>(modelName, schema) ;