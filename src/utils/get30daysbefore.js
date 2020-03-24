const get30daysbefore = () => {
  const cuerrentDate = new Date();

  cuerrentDate.setDate(cuerrentDate.getDate() - 30);

  let beforeThirtyDay = cuerrentDate.toJSON(cuerrentDate).split('T')[0];

  return beforeThirtyDay;
};
export default get30daysbefore;
