query("SELECT created_at, humidity, temperature FROM measurements WHERE sensor_id = 1", data => {
  console.log(data);                                /* start=2 */
  console.log(data[0]);                             /* start=3 */
  console.log(data[1]);                             /* start=3 */
  console.log(data[2]);                             /* start=3 */
  var temperaturen = extract(data, 'temperature');  /* start=4 */
  console.log(temperaturen);                        /* start=4 */
});
