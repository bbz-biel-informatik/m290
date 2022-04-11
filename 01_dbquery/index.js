query("SELECT created_at, humidity, temperature FROM measurements WHERE sensor_id = 1", data => {
  console.log(data);                                /* start=2 */
  var temperaturen = extract(data, 'temperature');  /* start=3 */
  console.log(temperaturen);                        /* start=3 */
});
