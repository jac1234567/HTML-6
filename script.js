// Objeto global para almacenar los datos del servicio
let service = null;

// Función para registrar un servicio de Internet
function registerService() {
    const name = prompt("Ingrese el nombre del cliente:");
    const contractNumber = prompt("Ingrese el número de contrato:");
    const planType = prompt("Ingrese el tipo de plan (Básico, Intermedio, Avanzado):");

    let speed = 0;
    while (speed <= 0) {
        speed = parseFloat(prompt("Ingrese la velocidad contratada (en Mbps):"));
        if (speed <= 0) {
            alert("La velocidad contratada debe ser mayor a 0. Inténtelo nuevamente.");
        }
    }

    const price = parseFloat(prompt("Ingrese el precio mensual del plan:"));

    // Guardar los datos en el objeto global
    service = {
        name,
        contractNumber,
        planType,
        speed,
        price
    };

    alert("Servicio registrado exitosamente.");
}

// Función para consultar los detalles del servicio
function consultService() {
    if (!service) {
        alert("No se ha registrado ningún servicio.");
        return;
    }

    const details = `
        Nombre del cliente: ${service.name}
        Número de contrato: ${service.contractNumber}
        Tipo de plan: ${service.planType}
        Velocidad contratada: ${service.speed} Mbps
        Precio mensual: $${service.price.toFixed(2)}
    `;

    document.getElementById("service-info").innerText = details;
    document.getElementById("service-details").style.display = "block";
}

// Función para actualizar el precio mensual del plan
function updatePrice() {
    if (!service) {
        alert("No se ha registrado ningún servicio.");
        return;
    }

    const newPrice = parseFloat(prompt("Ingrese el nuevo precio mensual del plan:"));
    service.price = newPrice;

    alert(`El precio mensual ha sido actualizado a $${newPrice.toFixed(2)}.`);
}

// Función para cambiar el tipo de plan
function changePlan() {
    if (!service) {
        alert("No se ha registrado ningún servicio.");
        return;
    }

    const newPlan = prompt("Ingrese el nuevo tipo de plan (Básico, Intermedio, Avanzado):");
    service.planType = newPlan;

    alert(`El tipo de plan ha sido cambiado a ${newPlan}.`);
}

// Función para calcular el costo total
function calculateCost() {
    if (!service) {
        alert("No se ha registrado ningún servicio.");
        return;
    }

    document.getElementById("cost-section").style.display = "block";
}

// Función para mostrar el costo total basado en el número de meses
function showTotalCost() {
    const months = parseInt(document.getElementById("months").value);
    if (!months || months <= 0) {
        alert("Por favor, ingrese un número válido de meses.");
        return;
    }

    const totalCost = service.price * months;
    document.getElementById("total-cost").innerText = `El costo total para ${months} mes(es) es: $${totalCost.toFixed(2)}.`;
}
