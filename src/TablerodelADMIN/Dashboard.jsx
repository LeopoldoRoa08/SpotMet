import React from "react";
import "./Dashboard.css";

function Dashboard({
  profileImage = "https://cdn.builder.io/api/v1/image/assets/TEMP/1b30cb881b384d5e3a76ab65c9ed514be7a9ef15?width=354",
  totalEvents = 240,
  totalEarnings = 24220,
  totalCancellations = 74,
  upcomingReservations = 3,
  eventsPercentage = "10%",
  earningsPercentage = "20.51%",
  cancellationsPercentage = "02.15%",
  reservationsPercentage = "3.11%",
  reservations = [
    {
      id: "1",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/01bf9ccff1d4f529296a7750474ecf5cc5bb2e6b?width=224",
      title: "Laboratorio Experimental del Metaverso",
      category: "Laboratorio",
      price: "$200",
      time: "02:30 pm",
      date: "24 de Junio 2025"
    },
    {
      id: "2",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/535e57ff9f404b9f29ed0cecac0da0956bc99db7?width=224",
      title: "Cancha de Pádel",
      category: "Cancha",
      price: "$40",
      time: "11:00 am",
      date: "24 de Junio 2025"
    },
    {
      id: "3",
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/6c4fa863f7dafce04330098fe5ded4935dd54a0b?width=224",
      title: "Centro Mundo X",
      category: "Sala",
      price: "$120",
      time: "09:15 am",
      date: "24 de Junio 2025"
    }
  ]
}) {
  const UserIcon = () => (
    <svg width="65" height="68" viewBox="0 0 65 68" fill="none" xmlns="http://www.w3.org/2000/svg" className="user-icon">
      <path d="M27.0846 34.0002C24.1055 34.0002 21.5551 32.8904 19.4336 30.671C17.3121 28.4516 16.2513 25.7835 16.2513 22.6668C16.2513 19.5502 17.3121 16.8821 19.4336 14.6627C21.5551 12.4432 24.1055 11.3335 27.0846 11.3335C30.0638 11.3335 32.6142 12.4432 34.7357 14.6627C36.8572 16.8821 37.918 19.5502 37.918 22.6668C37.918 25.7835 36.8572 28.4516 34.7357 30.671C32.6142 32.8904 30.0638 34.0002 27.0846 34.0002ZM5.41797 56.6668V48.7335C5.41797 47.1752 5.80165 45.7113 6.56901 44.3418C7.33637 42.9724 8.39714 41.9335 9.7513 41.2252C12.0534 39.9974 14.6489 38.9585 17.5378 38.1085C20.4267 37.2585 23.6089 36.8335 27.0846 36.8335H28.0326C28.3034 36.8335 28.5742 36.8807 28.8451 36.9752C28.4839 37.8252 28.1793 38.7106 27.931 39.6314C27.6827 40.5522 27.4909 41.5085 27.3555 42.5002H27.0846C23.8798 42.5002 21.0022 42.9252 18.4518 43.7752C15.9015 44.6252 13.8138 45.4752 12.1888 46.3252C11.7826 46.5613 11.4553 46.8918 11.207 47.3168C10.9588 47.7418 10.8346 48.2141 10.8346 48.7335V51.0002H27.8971C28.168 51.9918 28.5291 52.9717 28.9805 53.9397C29.4319 54.9078 29.9284 55.8168 30.4701 56.6668H5.41797ZM43.3346 59.5002L42.5221 55.2502C41.9805 55.014 41.4727 54.7661 40.9987 54.5064C40.5247 54.2467 40.0395 53.9279 39.543 53.5502L35.6159 54.8252L32.9076 50.0085L36.0221 47.1752C35.9319 46.514 35.8867 45.9002 35.8867 45.3335C35.8867 44.7668 35.9319 44.1529 36.0221 43.4918L32.9076 40.6585L35.6159 35.8418L39.543 37.1168C40.0395 36.7391 40.5247 36.4203 40.9987 36.1606C41.4727 35.9009 41.9805 35.6529 42.5221 35.4168L43.3346 31.1668H48.7513L49.5638 35.4168C50.1055 35.6529 50.6133 35.9127 51.0872 36.196C51.5612 36.4793 52.0464 36.8335 52.543 37.2585L56.4701 35.8418L59.1784 40.8002L56.0638 43.6335C56.1541 44.2002 56.1992 44.7904 56.1992 45.4043C56.1992 46.0182 56.1541 46.6085 56.0638 47.1752L59.1784 50.0085L56.4701 54.8252L52.543 53.5502C52.0464 53.9279 51.5612 54.2467 51.0872 54.5064C50.6133 54.7661 50.1055 55.014 49.5638 55.2502L48.7513 59.5002H43.3346ZM46.043 51.0002C47.5326 51.0002 48.8077 50.4453 49.8685 49.3356C50.9293 48.2259 51.4596 46.8918 51.4596 45.3335C51.4596 43.7752 50.9293 42.4411 49.8685 41.3314C48.8077 40.2217 47.5326 39.6668 46.043 39.6668C44.5534 39.6668 43.2782 40.2217 42.2174 41.3314C41.1567 42.4411 40.6263 43.7752 40.6263 45.3335C40.6263 46.8918 41.1567 48.2259 42.2174 49.3356C43.2782 50.4453 44.5534 51.0002 46.043 51.0002ZM27.0846 28.3335C28.5742 28.3335 29.8494 27.7786 30.9102 26.6689C31.9709 25.5592 32.5013 24.2252 32.5013 22.6668C32.5013 21.1085 31.9709 19.7745 30.9102 18.6647C29.8494 17.555 28.5742 17.0002 27.0846 17.0002C25.5951 17.0002 24.3199 17.555 23.2591 18.6647C22.1984 19.7745 21.668 21.1085 21.668 22.6668C21.668 24.2252 22.1984 25.5592 23.2591 26.6689C24.3199 27.7786 25.5951 28.3335 27.0846 28.3335Z" fill="#030027"/>
    </svg>
  );

  const MenuIcon = () => (
    <svg width="46" height="53" viewBox="0 0 46 53" fill="none" xmlns="http://www.w3.org/2000/svg" className="menu-icon">
      <path d="M5.75 39.75V35.3333H40.25V39.75H5.75ZM5.75 28.7083V24.2917H40.25V28.7083H5.75ZM5.75 17.6667V13.25H40.25V17.6667H5.75Z" fill="#EE5D08"/>
    </svg>
  );

  const ArrowUpIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="stat-arrow">
      <path d="M15 8.33341L13.7917 9.50008L10.8333 6.54175L10.8333 16.6667L9.16667 16.6667L9.16667 6.54175L6.20833 9.50008L5 8.33342L10 3.33342L15 8.33341Z" fill="#278642"/>
    </svg>
  );

  const ArrowDownIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="stat-arrow">
      <path d="M5 11.6666L6.20833 10.4999L9.16667 13.4583L9.16667 3.33325L10.8333 3.33325L10.8333 13.4583L13.7917 10.4999L15 11.6666L10 16.6666L5 11.6666Z" fill="#DB4346"/>
    </svg>
  );

  const PriceIcon = () => (
    <div className="price-icon-container">
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="price-circle">
        <circle cx="25" cy="25" r="25" fill="#FFE8DA"/>
      </svg>
      <span className="price-symbol">$</span>
    </div>
  );

  const TimeIcon = () => (
    <div className="time-icon-container">
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="time-circle">
        <circle cx="25" cy="25" r="25" fill="#EDEBFF"/>
      </svg>
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="time-icon">
        <path d="M3.125 10.4167V4.16667H5.20833V6.61458C6.09375 5.50347 7.17448 4.6441 8.45052 4.03646C9.72656 3.42882 11.0764 3.125 12.5 3.125C15.1042 3.125 17.3177 4.03646 19.1406 5.85938C20.9635 7.68229 21.875 9.89583 21.875 12.5H19.7917C19.7917 10.4688 19.0842 8.74566 17.6693 7.33073C16.2543 5.9158 14.5313 5.20833 12.5 5.20833C11.3021 5.20833 10.1823 5.48611 9.14063 6.04167C8.09896 6.59722 7.22222 7.36111 6.51042 8.33333H9.375V10.4167H3.125ZM3.17708 13.5417H5.3125C5.52083 15.1562 6.1849 16.5234 7.30469 17.6432C8.42448 18.763 9.76563 19.4444 11.3281 19.6875L12.5781 21.875C10.1823 21.875 8.0816 21.0807 6.27604 19.4922C4.47049 17.9036 3.4375 15.9201 3.17708 13.5417ZM13.9063 15.3646L11.4583 12.9167V7.29167H13.5417V12.0833L15 13.5417L13.9063 15.3646ZM18.724 25L18.4115 23.4375C18.2031 23.3507 18.0078 23.2595 17.8255 23.1641C17.6432 23.0686 17.4566 22.9514 17.2656 22.8125L15.7552 23.2812L14.7135 21.5104L15.9115 20.4688C15.8767 20.2431 15.8594 20.0174 15.8594 19.7917C15.8594 19.566 15.8767 19.3403 15.9115 19.1146L14.7135 18.0729L15.7552 16.3021L17.2656 16.7708C17.4566 16.6319 17.6432 16.5148 17.8255 16.4193C18.0078 16.3238 18.2031 16.2326 18.4115 16.1458L18.724 14.5833H20.8073L21.1198 16.1458C21.3281 16.2326 21.5278 16.3325 21.7188 16.4453C21.9097 16.5582 22.092 16.684 22.2656 16.8229L23.776 16.3021L24.8177 18.125L23.6198 19.1667C23.6545 19.3924 23.6719 19.6094 23.6719 19.8177C23.6719 20.026 23.6545 20.2431 23.6198 20.4688L24.8177 21.5104L23.776 23.2812L22.2656 22.8125C22.0747 22.9514 21.888 23.0686 21.7057 23.1641C21.5234 23.2595 21.3281 23.3507 21.1198 23.4375L20.8073 25H18.724ZM19.7656 21.875C20.3385 21.875 20.829 21.671 21.237 21.263C21.645 20.855 21.849 20.3646 21.849 19.7917C21.849 19.2188 21.645 18.7283 21.237 18.3203C20.829 17.9123 20.3385 17.7083 19.7656 17.7083C19.1927 17.7083 18.7023 17.9123 18.2943 18.3203C17.8863 18.7283 17.6823 19.2188 17.6823 19.7917C17.6823 20.3646 17.8863 20.855 18.2943 21.263C18.7023 21.671 19.1927 21.875 19.7656 21.875Z" fill="#030027"/>
      </svg>
    </div>
  );

  const DateIcon = () => (
    <div className="date-icon-container">
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="date-circle">
        <circle cx="25" cy="25" r="25" fill="#EDEBFF"/>
      </svg>
      <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="date-icon">
        <path d="M4.79167 22.9166C4.26458 22.9166 3.81337 22.7126 3.43802 22.3046C3.06267 21.8966 2.875 21.4062 2.875 20.8333V6.24992C2.875 5.677 3.06267 5.18655 3.43802 4.77856C3.81337 4.37058 4.26458 4.16659 4.79167 4.16659H5.75V2.08325H7.66667V4.16659H15.3333V2.08325H17.25V4.16659H18.2083C18.7354 4.16659 19.1866 4.37058 19.562 4.77856C19.9373 5.18655 20.125 5.677 20.125 6.24992V20.8333C20.125 21.4062 19.9373 21.8966 19.562 22.3046C19.1866 22.7126 18.7354 22.9166 18.2083 22.9166H4.79167ZM4.79167 20.8333H18.2083V10.4166H4.79167V20.8333ZM4.79167 8.33325H18.2083V6.24992H4.79167V8.33325ZM11.5 14.5833C11.2285 14.5833 11.0009 14.4834 10.8172 14.2838C10.6335 14.0841 10.5417 13.8367 10.5417 13.5416C10.5417 13.2464 10.6335 12.9991 10.8172 12.7994C11.0009 12.5997 11.2285 12.4999 11.5 12.4999C11.7715 12.4999 11.9991 12.5997 12.1828 12.7994C12.3665 12.9991 12.4583 13.2464 12.4583 13.5416C12.4583 13.8367 12.3665 14.0841 12.1828 14.2838C11.9991 14.4834 11.7715 14.5833 11.5 14.5833ZM7.66667 14.5833C7.39514 14.5833 7.16753 14.4834 6.98385 14.2838C6.80017 14.0841 6.70833 13.8367 6.70833 13.5416C6.70833 13.2464 6.80017 12.9991 6.98385 12.7994C7.16753 12.5997 7.39514 12.4999 7.66667 12.4999C7.93819 12.4999 8.1658 12.5997 8.34948 12.7994C8.53316 12.9991 8.625 13.2464 8.625 13.5416C8.625 13.8367 8.53316 14.0841 8.34948 14.2838C8.1658 14.4834 7.93819 14.5833 7.66667 14.5833ZM15.3333 14.5833C15.0618 14.5833 14.8342 14.4834 14.6505 14.2838C14.4668 14.0841 14.375 13.8367 14.375 13.5416C14.375 13.2464 14.4668 12.9991 14.6505 12.7994C14.8342 12.5997 15.0618 12.4999 15.3333 12.4999C15.6049 12.4999 15.8325 12.5997 16.0161 12.7994C16.1998 12.9991 16.2917 13.2464 16.2917 13.5416C16.2917 13.8367 16.1998 14.0841 16.0161 14.2838C15.8325 14.4834 15.6049 14.5833 15.3333 14.5833ZM11.5 18.7499C11.2285 18.7499 11.0009 18.6501 10.8172 18.4504C10.6335 18.2508 10.5417 18.0034 10.5417 17.7083C10.5417 17.4131 10.6335 17.1657 10.8172 16.9661C11.0009 16.7664 11.2285 16.6666 11.5 16.6666C11.7715 16.6666 11.9991 16.7664 12.1828 16.9661C12.3665 17.1657 12.4583 17.4131 12.4583 17.7083C12.4583 18.0034 12.3665 18.2508 12.1828 18.4504C11.9991 18.6501 11.7715 18.7499 11.5 18.7499ZM7.66667 18.7499C7.39514 18.7499 7.16753 18.6501 6.98385 18.4504C6.80017 18.2508 6.70833 18.0034 6.70833 17.7083C6.70833 17.4131 6.80017 17.1657 6.98385 16.9661C7.16753 16.7664 7.39514 16.6666 7.66667 16.6666C7.93819 16.6666 8.1658 16.7664 8.34948 16.9661C8.53316 17.1657 8.625 17.4131 8.625 17.7083C8.625 18.0034 8.53316 18.2508 8.34948 18.4504C8.1658 18.6501 7.93819 18.7499 7.66667 18.7499ZM15.3333 18.7499C15.0618 18.7499 14.8342 18.6501 14.6505 18.4504C14.4668 18.2508 14.375 18.0034 14.375 17.7083C14.375 17.4131 14.4668 17.1657 14.6505 16.9661C14.8342 16.7664 15.0618 16.6666 15.3333 16.6666C15.6049 16.6666 15.8325 16.7664 16.0161 16.9661C16.1998 17.1657 16.2917 17.4131 16.2917 17.7083C16.2917 18.0034 16.1998 18.2508 16.0161 18.4504C15.8325 18.6501 15.6049 18.7499 15.3333 18.7499Z" fill="#030027"/>
      </svg>
    </div>
  );

  const MenuDotsIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="menu-dots">
      <path d="M10 6C10 5.45 10.1958 4.97917 10.5875 4.5875C10.9792 4.19583 11.45 4 12 4C12.55 4 13.0208 4.19583 13.4125 4.5875C13.8042 4.97917 14 5.45 14 6C14 6.55 13.8042 7.02083 13.4125 7.4125C13.0208 7.80417 12.55 8 12 8C11.45 8 10.9792 7.80417 10.5875 7.4125C10.1958 7.02083 10 6.55 10 6ZM10 12C10 11.45 10.1958 10.9792 10.5875 10.5875C10.9792 10.1958 11.45 10 12 10C12.55 10 13.0208 10.1958 13.4125 10.5875C13.8042 10.9792 14 11.45 14 12C14 12.55 13.8042 13.0208 13.4125 13.4125C13.0208 13.8042 12.55 14 12 14C11.45 14 10.9792 13.8042 10.5875 13.4125C10.1958 13.0208 10 12.55 10 12ZM10 18C10 17.45 10.1958 16.9792 10.5875 16.5875C10.9792 16.1958 11.45 16 12 16C12.55 16 13.0208 16.1958 13.4125 16.5875C13.8042 16.9792 14 17.45 14 18C14 18.55 13.8042 19.0208 13.4125 19.4125C13.0208 19.8042 12.55 20 12 20C11.45 20 10.9792 19.8042 10.5875 19.4125C10.1958 19.0208 10 18.55 10 18Z" fill="#EE5D08"/>
    </svg>
  );

  const StatCard = ({ title, value, percentage, isPositive }) => (
    <article className="stat-card">
      <h3 className="stat-title">{title}</h3>
      <p className="stat-value">{value}</p>
      <div className="stat-percentage">
        <div>
          {isPositive ? <ArrowUpIcon /> : <ArrowDownIcon />}
        </div>
        <span className="percentage-text">{percentage}</span>
      </div>
    </article>
  );

  const ReservationItem = ({ image, title, category, price, time, date }) => (
    <article className="reservation-item">
      <img src={image} alt={title} className="reservation-image" />

      <div className="reservation-content">
        <h3 className="reservation-title">{title}</h3>
        <p className="reservation-category">{category}</p>
      </div>

      <div className="reservation-price">
        <PriceIcon />
        <span className="reservation-price-text">{price}</span>
      </div>

      <div className="reservation-time">
        <TimeIcon />
        <span className="reservation-time-text">{time}</span>
      </div>

      <div className="reservation-date">
        <DateIcon />
        <span className="reservation-date-text">{date}</span>
      </div>

      <button aria-label="More options" className="reservation-menu">
        <MenuDotsIcon />
      </button>
    </article>
  );

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Hammersmith+One:wght@400&family=Roboto:ital,wght@0,400;0,500;0,700;1,600&display=swap"
      />
      <div className="dashboard-container">
        <header className="dashboard-header">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <div className="user-icon-wrapper">
            <UserIcon />
          </div>
          <div className="menu-icon-wrapper">
            <MenuIcon />
          </div>
        </header>

        <main>
          <h1 className="dashboard-title">Dashboard</h1>

          <div className="action-buttons">
            <button className="action-button action-button-primary">
              <span>Ver espacios</span>
            </button>
            <button className="action-button action-button-secondary">
              <span>Reportes</span>
            </button>
          </div>

          <section className="stats-section">
            <StatCard
              title="Total Eventos"
              value={totalEvents.toString()}
              percentage={eventsPercentage}
              isPositive={true}
            />
            <StatCard
              title="Total Ganancias"
              value={`$ ${totalEarnings.toLocaleString()}`}
              percentage={earningsPercentage}
              isPositive={true}
            />
            <StatCard
              title="Total Cancelaciones"
              value={totalCancellations.toString()}
              percentage={cancellationsPercentage}
              isPositive={false}
            />
            <StatCard
              title="Próximas Reservaciones"
              value={upcomingReservations.toString()}
              percentage={reservationsPercentage}
              isPositive={true}
            />
          </section>

          <section className="reservations-section">
            <h2 className="reservations-title">Próximas Reservaciones</h2>

            <div className="reservations-list">
              {reservations.map((reservation, index) => (
                <React.Fragment key={reservation.id}>
                  <ReservationItem {...reservation} />
                  {index < reservations.length - 1 && (
                    <hr className="reservation-divider" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </section>
        </main>

       
      </div>
    </>
  );
}

export default Dashboard;
