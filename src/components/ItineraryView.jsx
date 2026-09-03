import { MapPin, Lightbulb, Clock } from 'lucide-react';

import './ItineraryView.css';

export default function ItineraryView({ itinerary, destination, loading, error, onRetry }) {
  if (loading) {
    return (
      <div className="itinerary-view">
        <div className="itinerary-view__loading">
          <div className="itinerary-view__spinner" />
          <h4 className="itinerary-view__loading-title">Planning Your Trip</h4>
          <p className="itinerary-view__loading-text">
            Our AI is crafting a personalized itinerary for {destination?.name || 'your destination'}...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="itinerary-view">
        <div className="itinerary-view__error card">
          <p>{error}</p>
          {onRetry && (
            <button className="btn-primary" onClick={onRetry} style={{ marginTop: '16px' }}>
              Try Again
            </button>
          )}
        </div>
      </div>
    );
  }

  if (!itinerary || itinerary.length === 0) return null;

  return (
    <div className="itinerary-view" id="itinerary">
      <div className="itinerary-view__header">
        <h2 className="itinerary-view__title">
          Your {itinerary.length}-Day Itinerary
        </h2>
        {destination && (
          <p className="itinerary-view__subtitle">
            <MapPin size={16} /> {destination.name}, {destination.country}
          </p>
        )}
      </div>

      <div className="itinerary-view__timeline">
        {itinerary.map((day, dayIndex) => (
          <div
            key={day.day || dayIndex}
            className="itinerary-day"
            style={{ animationDelay: `${dayIndex * 150}ms` }}
          >
            <div className="itinerary-day__marker">
              <div className="itinerary-day__marker-dot" />
              {dayIndex < itinerary.length - 1 && (
                <div className="itinerary-day__marker-line" />
              )}
            </div>

            <div className="itinerary-day__content card">
              <div className="itinerary-day__header">
                <span className="itinerary-day__number">Day {day.day || dayIndex + 1}</span>
                <h4 className="itinerary-day__title">{day.title}</h4>
              </div>

              <div className="itinerary-day__activities">
                {day.activities && day.activities.map((activity, actIndex) => (
                  <div key={actIndex} className="itinerary-activity">
                    <div className="itinerary-activity__time">
                      <Clock size={14} />
                      <span>{activity.time}</span>
                    </div>
                    <div className="itinerary-activity__content">
                      <h5 className="itinerary-activity__name">{activity.activity}</h5>
                      <p className="itinerary-activity__description">{activity.description}</p>
                      {activity.tip && (
                        <div className="itinerary-activity__tip">
                          <Lightbulb size={14} />
                          <span>{activity.tip}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
