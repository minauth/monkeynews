import React from "react";

const Contacts = () => {
  return (
    <div className="text-center rounded px-5 py-4">
      <div className="fs-5 fw-medium lh-1 pt-2 mb-4">Контактная информация</div>
      <div className="fs-6 mb-3">
        пр. Обуховской Обороны, д. 80, Санкт-Петербург, Россия, 192029
      </div>
      <div className="fs-6 mb-3">
        Телефон/факс:
        <br /> <span className="text-blue">8 (812) 320-51-20</span>
      </div>
      <div className="fs-6 mb-3">
        Телефон горячей линии:
        <br /> <span className="text-blue">8 (800) 200-20-40</span>
      </div>
      <div className="fs-6 mb-3">(на территории России звонок бесплатный).</div>
      <div className="fs-6 pb-2">
        Электронная почта: <span className="text-blue">client@nevcos.ru</span>
      </div>
    </div>
  );
};

export default Contacts;
