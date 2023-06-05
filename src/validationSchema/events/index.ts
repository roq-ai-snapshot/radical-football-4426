import * as yup from 'yup';

export const eventValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().required(),
  event_date: yup.date().required(),
  event_time: yup.date().required(),
  team_id: yup.string().nullable().required(),
});
