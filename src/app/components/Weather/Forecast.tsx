import React from "react";
import styles from "../../styles/forecast.module.css";

interface ForecastProps {
  forecastData: any;
}

const Forecast: React.FC<ForecastProps> = ({ forecastData }) => {
  return (
    <div className={styles.card_element}>
      <h2>Previsão para os próximos dias</h2>
      <div className={styles.card}>
        {forecastData.forecastday.map((day: any, index: number) => (
          <div key={index} className={styles.card_container}>
            <div className={styles.card_model}>
              <p>
                <strong>Data:</strong> {day.date}
              </p>
              <img src={day.day.condition.icon} alt={day.day.condition.text} />
              <p>{day.day.condition.text}</p>
              <p>
                {day.day.maxtemp_c} ºC - {day.day.mintemp_c} ºC
              </p>
              <p></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
