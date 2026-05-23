import useClock from "../../hooks/useClock";
import ClockActions from "../shared/clock-actions";
import ClockDisplay from "../shared/clock-display";
import ClockListItem from "./ClockListItem";

const ClockList = ({ clocks, updateClock, deleteClock, localClock }) => {
  const { date: putlicDate, timezone, offset } = useClock("EST");
  return (
    <div>
      <h2 className="mb-1">Custom Clocks</h2>
      <hr className="mb-1" />
      {clocks.length > 0 ? (
        <div className="flex gap-5">
          {clocks.map((clock) => (
            <ul key={clock.id}>
              <li>
                <ClockListItem
                  clock={clock}
                  localClock={localClock}
                  updateClock={updateClock}
                  deleteClock={deleteClock}
                />
              </li>
            </ul>
          ))}
        </div>
      ) : (
        <h3>No clocks found</h3>
      )}
    </div>
  );
};
export default ClockList;
