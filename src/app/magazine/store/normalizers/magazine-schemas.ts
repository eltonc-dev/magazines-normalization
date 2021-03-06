import { schema } from 'normalizr';


/**
 * I put all my schemas together here, because this way i think is better organized and better to reuse
 */
const image = new schema.Entity('images');

const article = new schema.Entity('articles', {
  images: [image]
});

const issue = new schema.Entity('issues', {
  articles: [article]
});

const magazine = new schema.Entity('magazines', {
  issues: [issue]
});

const completeSchema = new schema.Object(
  {
    magazines: [magazine],
    issues: [issue],
    articles: [article],
    images: [image]
  }
)
;

export const MagazineSchemas = {
  image,
  article,
  issue,
  magazine,
  completeSchema
}
