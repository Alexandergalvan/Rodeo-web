// import React, { useState } from "react";
// import { Calculator, Info } from "lucide-react";

// const FoodCalculator = () => {
//   const [animalType, setAnimalType] = useState<AnimalType>("perro");
//   const [weight, setWeight] = useState(0);
//   const [activity, setActivity] = useState<ActivityLevel>("media");
//   const [age, setAge] = useState<AgeGroup>("adulto");
//   const [result, setResult] = useState<CalculationResult>();

//   type AnimalType = "perro" | "gato" | "caballo";
//   type ActivityLevel = "baja" | "media" | "alta";
//   type AgeGroup = "cachorro" | "adulto" | "senior";

//   interface CalculationResult {
//     dailyAmount: number;
//     meals: number;
//     monthlyAmount: number;
//   }

//   const calculateFood = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Factores de multiplicación basados en actividad y edad
//     const activityFactor: Record<ActivityLevel, number> = {
//       baja: 0.8,
//       media: 1,
//       alta: 1.2,
//     };

//     const ageFactor: Record<AgeGroup, number> = {
//       cachorro: 1.5,
//       adulto: 1,
//       senior: 0.8,
//     };

//     // Cálculo base por tipo de animal (gramos por kg de peso)
//     const baseAmount: Record<AnimalType, number> = {
//       perro: 20,
//       gato: 25,
//       caballo: 15,
//     };

//     if (animalType && weight && !isNaN(weight)) {
//       const calculatedAmount =
//         baseAmount[animalType] *
//         weight *
//         activityFactor[activity] *
//         ageFactor[age];

//       setResult({
//         dailyAmount: Math.round(calculatedAmount),
//         meals: animalType === "caballo" ? 2 : 3,
//         monthlyAmount: Math.round((calculatedAmount * 30) / 1000),
//       });
//     }
//   };

//   const resetCalculator = () => {
//     setAnimalType("perro");
//     setWeight(0);
//     setActivity("media");
//     setAge("adulto");
//     setResult(undefined);
//   };

//   return (
//     <section className="py-16 px-4 bg-stone-100">
//       <div className="max-w-4xl mx-auto">
//         <div className="text-center mb-10">
//           <h2 className="text-4xl font-bold text-stone-800 mb-4">
//             Calculadora de Alimento
//           </h2>
//           <p className="text-xl text-stone-600">
//             Calcula la cantidad ideal de alimento para tu mascota
//           </p>
//         </div>

//         <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               <form onSubmit={calculateFood} className="space-y-6">
//                 <div>
//                   <label className="block text-sky-700 mb-2 font-medium">
//                     Tipo de Animal
//                   </label>
//                   <select
//                     value={animalType}
//                     onChange={(e) =>
//                       setAnimalType(e.target.value as AnimalType)
//                     }
//                     className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
//                     required
//                   >
//                     <option value="">Selecciona un animal</option>
//                     <option value="perro">Perro</option>
//                     <option value="gato">Gato</option>
//                     <option value="caballo">Caballo</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sky-700 mb-2 font-medium">
//                     Peso (kg)
//                   </label>
//                   <input
//                     type="number"
//                     value={weight}
//                     onChange={(e) => setWeight(parseFloat(e.target.value))}
//                     className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
//                     placeholder="Ej: 15"
//                     min="0.1"
//                     step="0.1"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sky-700 mb-2 font-medium">
//                     Nivel de Actividad
//                   </label>
//                   <select
//                     value={activity}
//                     onChange={(e) =>
//                       setActivity(e.target.value as ActivityLevel)
//                     }
//                     className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
//                   >
//                     <option value="bajo">Bajo (sedentario)</option>
//                     <option value="normal">Normal</option>
//                     <option value="alto">Alto (muy activo)</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sky-700 mb-2 font-medium">
//                     Edad
//                   </label>
//                   <select
//                     value={age}
//                     onChange={(e) => setAge(e.target.value as AgeGroup)}
//                     className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
//                   >
//                     <option value="cachorro">Cachorro/Joven</option>
//                     <option value="adulto">Adulto</option>
//                     <option value="senior">Senior</option>
//                   </select>
//                 </div>

//                 <div className="pt-4">
//                   <button
//                     type="submit"
//                     className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
//                   >
//                     <Calculator className="mr-2 h-5 w-5" />
//                     Calcular
//                   </button>
//                 </div>
//               </form>
//             </div>

//             <div className="bg-stone-50 rounded-lg p-6">
//               {result ? (
//                 <div className="space-y-6">
//                   <h3 className="text-2xl font-bold text-stone-800 mb-4">
//                     Resultado
//                   </h3>

//                   <div className="bg-white rounded-lg p-6 shadow-md">
//                     <h4 className="font-medium text-stone-600 mb-2">
//                       Cantidad diaria:
//                     </h4>
//                     <p className="text-3xl font-bold text-sky-600">
//                       {result.dailyAmount} gramos
//                     </p>
//                   </div>

//                   <div className="bg-white rounded-lg p-6 shadow-md">
//                     <h4 className="font-medium text-stone-600 mb-2">
//                       Distribución recomendada:
//                     </h4>
//                     <p className="text-lg">
//                       {result.meals} tomas de{" "}
//                       <span className="font-bold text-sky-600">
//                         {Math.round(result.dailyAmount / result.meals)} gramos
//                       </span>
//                     </p>
//                   </div>

//                   <div className="bg-white rounded-lg p-6 shadow-md">
//                     <h4 className="font-medium text-stone-600 mb-2">
//                       Consumo mensual:
//                     </h4>
//                     <p className="text-xl">
//                       <span className="font-bold text-sky-600">
//                         {result.monthlyAmount} kg
//                       </span>{" "}
//                       aproximadamente
//                     </p>
//                   </div>

//                   <div className="mt-8 flex space-x-4">
//                     <button
//                       onClick={resetCalculator}
//                       className="w-full border border-stone-300 hover:bg-stone-100 text-sky-700 py-2 px-4 rounded-lg font-medium transition-colors duration-300"
//                     >
//                       Reiniciar
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <div className="h-full flex items-center justify-center flex-col text-center">
//                   <Info className="h-12 w-12 text-stone-400 mb-4" />
//                   <h3 className="text-xl font-medium text-sky-700 mb-2">
//                     Completa el formulario
//                   </h3>
//                   <p className="text-stone-500">
//                     Ingresa los datos de tu mascota para calcular la cantidad
//                     ideal de alimento diario.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="mt-8 bg-sky-50 border border-sky-100 rounded-lg p-4">
//           <p className="text-sm text-stone-600 flex items-start">
//             <Info className="h-5 w-5 text-sky-500 mr-2 mt-0.5 flex-shrink-0" />
//             <span>
//               Esta calculadora proporciona una estimación general. Consulta
//               siempre con tu veterinario para determinar la cantidad exacta
//               según las necesidades específicas de tu mascota.
//             </span>
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FoodCalculator;

import React, { useState } from "react";
import { Calculator, Info, X } from "lucide-react";

interface FoodCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Componente modal que recibe props para control externo
const FoodCalculatorModal: React.FC<FoodCalculatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-[#c4c4c490] z-50 flex items-center justify-center p-4 animate-fade-in-up"
      onClick={onClose}
    >
      {/* Modal content */}
      <div
        className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-auto"
        onClick={stopPropagation}
      >
        {/* Modal header */}
        <div className="flex justify-between items-center p-6 border-b border-stone-200">
          <h2 className="text-2xl font-bold text-stone-800">
            Calculadora de Alimento
          </h2>
          <button
            onClick={onClose}
            className="text-stone-500 hover:text-stone-800 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Modal body */}
        <div className="p-6">
          <FoodCalculatorContent />
        </div>
      </div>
    </div>
  );
};

// Componente con el contenido de la calculadora
const FoodCalculatorContent = () => {
  const [animalType, setAnimalType] = useState<AnimalType>("perro");
  const [weight, setWeight] = useState(0);
  const [activity, setActivity] = useState<ActivityLevel>("media");
  const [age, setAge] = useState<AgeGroup>("adulto");
  const [result, setResult] = useState<CalculationResult>();

  type AnimalType = "perro" | "gato" | "caballo";
  type ActivityLevel = "baja" | "media" | "alta";
  type AgeGroup = "cachorro" | "adulto" | "senior";

  interface CalculationResult {
    dailyAmount: number;
    meals: number;
    monthlyAmount: number;
  }

  const calculateFood = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const activityFactor: Record<ActivityLevel, number> = {
      baja: 0.8,
      media: 1,
      alta: 1.2,
    };

    const ageFactor: Record<AgeGroup, number> = {
      cachorro: 1.5,
      adulto: 1,
      senior: 0.8,
    };

    // Cálculo base por tipo de animal (gramos por kg de peso)
    const baseAmount: Record<AnimalType, number> = {
      perro: 20,
      gato: 25,
      caballo: 15,
    };

    if (animalType && weight && !isNaN(weight)) {
      const calculatedAmount =
        baseAmount[animalType] *
        weight *
        activityFactor[activity] *
        ageFactor[age];

      setResult({
        dailyAmount: Math.round(calculatedAmount),
        meals: animalType === "caballo" ? 2 : 3,
        monthlyAmount: Math.round((calculatedAmount * 30) / 1000),
      });
    }
  };

  const resetCalculator = () => {
    setAnimalType("perro");
    setWeight(0);
    setActivity("media");
    setAge("adulto");
    setResult(undefined);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <form onSubmit={calculateFood} className="space-y-6">
          <div>
            <label className="block text-sky-700 mb-2 font-medium">
              Tipo de Animal
            </label>
            <select
              value={animalType}
              onChange={(e) => setAnimalType(e.target.value as AnimalType)}
              className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-800"
              required
            >
              <option value="">Selecciona un animal</option>
              <option value="perro">Perro</option>
              <option value="gato">Gato</option>
              <option value="caballo">Caballo</option>
            </select>
          </div>

          <div>
            <label className="block text-sky-700 mb-2 font-medium">
              Peso (kg)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(parseFloat(e.target.value))}
              className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-800"
              placeholder="Ej: 15"
              min="0.1"
              step="0.1"
              required
            />
          </div>

          <div>
            <label className="block text-sky-700 mb-2 font-medium">
              Nivel de Actividad
            </label>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value as ActivityLevel)}
              className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-800"
            >
              <option value="baja">Bajo (sedentario)</option>
              <option value="media">Normal</option>
              <option value="alta">Alto (muy activo)</option>
            </select>
          </div>

          <div>
            <label className="block text-sky-700 mb-2 font-medium">Edad</label>
            <select
              value={age}
              onChange={(e) => setAge(e.target.value as AgeGroup)}
              className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-800"
            >
              <option value="cachorro">Cachorro/Joven</option>
              <option value="adulto">Adulto</option>
              <option value="senior">Senior</option>
            </select>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
            >
              <Calculator className="mr-2 h-5 w-5" />
              Calcular
            </button>
          </div>
        </form>
      </div>

      <div className="bg-stone-50 rounded-lg p-6">
        {result ? (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-stone-800 mb-4">
              Resultado
            </h3>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-medium text-stone-600 mb-2">
                Cantidad diaria:
              </h4>
              <p className="text-3xl font-bold text-sky-600">
                {result.dailyAmount} gramos
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-medium text-stone-600 mb-2">
                Distribución recomendada:
              </h4>
              <p className="text-lg text-gray-800">
                {result.meals} tomas de{" "}
                <span className="font-bold text-sky-600">
                  {Math.round(result.dailyAmount / result.meals)} gramos
                </span>
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h4 className="font-medium text-stone-600 mb-2">
                Consumo mensual:
              </h4>
              <p className="text-xl text-gray-800">
                <span className="font-bold text-sky-600">
                  {result.monthlyAmount} kg
                </span>{" "}
                aproximadamente
              </p>
            </div>

            <div className="mt-8 flex space-x-4">
              <button
                onClick={resetCalculator}
                className="w-full border border-stone-300 hover:bg-stone-100 text-sky-700 py-2 px-4 rounded-lg font-medium transition-colors duration-300"
              >
                Reiniciar
              </button>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center flex-col text-center">
            <Info className="h-12 w-12 text-stone-400 mb-4" />
            <h3 className="text-xl font-medium text-sky-700 mb-2">
              Completa el formulario
            </h3>
            <p className="text-stone-500">
              Ingresa los datos de tu mascota para calcular la cantidad ideal de
              alimento diario.
            </p>
          </div>
        )}
      </div>

      <div className="md:col-span-2 mt-4 bg-sky-50 border border-sky-100 rounded-lg p-4">
        <p className="text-sm text-stone-600 flex items-start">
          <Info className="h-5 w-5 text-sky-500 mr-2 mt-0.5 flex-shrink-0" />
          <span>
            Esta calculadora proporciona una estimación general. Consulta
            siempre con tu veterinario para determinar la cantidad exacta según
            las necesidades específicas de tu mascota.
          </span>
        </p>
      </div>
    </div>
  );
};

export default FoodCalculatorModal;
