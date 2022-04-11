query("SELECT created_at, humidity, temperature FROM measurements WHERE sensor_id = 1", data => {
  console.log(data);
  var temperaturen = extract(data, 'temperature');
  console.log(temperaturen);
});