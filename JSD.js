function mostrarReceta(plato) {
    // Obtener el elemento donde se mostrará la receta
    var receta = document.getElementById('receta');
    
    // Limpiar cualquier contenido previo de la receta
    receta.innerHTML = '';

    // Mostrar la receta correspondiente al plato seleccionado
    switch (plato) {
        case 'spaghetti':
            receta.innerHTML = `
                <h2>Receta de Spaghetti</h2>
                <h3>Ingredientes:</h3>
                <ul>
                    <li>Spaghetti</li>
                    <li>Salsa de tomate</li>
                    <li>Queso parmesano rallado</li>
                    <li>Aceite de oliva</li>
                    <li>Sal y pimienta al gusto</li>
                </ul>
                <h3>Preparación:</h3>
                <ol>
                    <li>Cocina el spaghetti en agua hirviendo con sal hasta que esté al dente.</li>
                    <li>Escurre el spaghetti y mézclalo con la salsa de tomate caliente.</li>
                    <li>Sirve el spaghetti en platos y espolvorea queso parmesano rallado encima.</li>
                    <li>¡Disfruta tu delicioso plato de spaghetti!</li>
                </ol>
                <h3>Video:</h3>
                

                <iframe width="560" height="315" src="https://www.youtube.com/embed/https://www.youtube.com/watch?v=lHmT7ipGNY4" frameborder="0" allowfullscreen></iframe>
            `;
            break;
        
        case 'ensalada':
            receta.innerHTML = `
                <h2>Receta de Ensalada</h2>
                <h3>Ingredientes:</h3>
                <ul>
                    <li>Lechuga</li>
                    <li>Tomate</li>
                    <li>Pepino</li>
                    <li>Zanahoria</li>
                    <li>Aceite de oliva</li>
                    <li>Vinagre balsámico</li>
                    <li>Sal y pimienta al gusto</li>
                </ul>
                <h3>Preparación:</h3>
                <ol>
                    <li>Lava y corta la lechuga, el tomate, el pepino y la zanahoria en trozos.</li>
                    <li>Mezcla todos los ingredientes en un tazón grande.</li>
                    <li>Aliña la ensalada con aceite de oliva, vinagre balsámico, sal y pimienta al gusto.</li>
                    <li>¡Sirve y disfruta de tu fresca ensalada!</li>
                </ol>
                <h3>Video:</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/https://youtu.be/ex2LaQ29S4o?si=aS4VvTs7e4BJxm17" frameborder="0" allowfullscreen></iframe>
            `;
            break;

        case 'pizza':
            receta.innerHTML = `
                <h2>Receta de Pizza</h2>
                <h3>Ingredientes:</h3>
                <ul>
                    <li>Masa de pizza</li>
                    <li>Salsa de tomate</li>
                    <li>Queso mozzarella rallado</li>
                    <li>Ingredientes adicionales (jamón, champiñones, etc.)</li>
                    <li>Aceite de oliva</li>
                    <li>Sal y pimienta al gusto</li>
                </ul>
                <h3>Preparación:</h3>
                <ol>
                    <li>Extiende la masa de pizza en una bandeja para hornear.</li>
                    <li>Unta la salsa de tomate sobre la masa.</li>
                    <li>Esparce el queso mozzarella rallado sobre la salsa.</li>
                    <li>Agrega los ingredientes adicionales según tu preferencia.</li>
                    <li>Salpica con aceite de oliva, sal y pimienta al gusto.</li>
                    <li>Hornea la pizza a temperatura alta hasta que esté dorada y crujiente.</li>
                    <li>¡Disfruta de tu deliciosa pizza casera!</li>
                </ol>
                <h3>Video:</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/https://www.youtube.com/watch?v=crdtrzZj3fo" frameborder="0" allowfullscreen></iframe>
            `;
            break;

        case 'hamburguesa':
            receta.innerHTML = `
                <h2>Receta de Hamburguesa</h2>
                <h3>Ingredientes:</h3>
                <ul>
                    <li>300g de carne molida</li>
                    <li>Pan de hamburguesa</li>
                    <li>Queso cheddar</li>
                    <li>Lechuga</li>
                    <li>Tomate</li>
                    <li>Cebolla</li>
                    <li>Sal y pimienta al gusto</li>
                    <li>Salsa de tomate, mostaza, mayonesa (opcional)</li>
                </ul>
                <h3>Preparación:</h3>
                <ol>
                    <li>Divide la carne molida en porciones y forma las hamburguesas.</li>
                    <li>Sazona las hamburguesas con sal y pimienta al gusto.</li>
                    <li>Cocina las hamburguesas a la parrilla o en una sartén caliente hasta que estén doradas por ambos lados y cocidas completamente.</li>
                    <li>Asa ligeramente los panes de hamburguesa en la parrilla o en una sartén.</li>
                    <li>Arma las hamburguesas colocando una hamburguesa cocida en un pan, agrega una loncha de queso cheddar, lechuga, rodajas de tomate y cebolla al gusto.</li>
                    <li>Agrega las salsas deseadas (salsa de tomate, mostaza, mayonesa).</li>
                    <li>Sirve caliente y ¡disfruta de tu hamburguesa casera!</li>
                </ol>
                <h3>Video:</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
            `;
            break;

        case 'tacos':
            receta.innerHTML = `
                <h2>Receta de Tacos</h2>
                <h3>Ingredientes:</h3>
                <ul>
                    <li>Tortillas de maíz o harina</li>
                    <li>Carne (res, pollo, cerdo)</li>
                    <li>Vegetales (cebolla, pimientos, tomate)</li>
                    <li>Queso rallado</li>
                    <li>Lechuga</li>
                    <li>Salsa (roja, verde, guacamole)</li>
                    <li>Sal y pimienta al gusto</li>
                </ul>
                <h3>Preparación:</h3>
                <ol>
                    <li>Cocina la carne con sal y pimienta al gusto.</li>
                    <li>Calienta las tortillas de maíz o harina.</li>
                    <li>Rellena las tortillas con la carne cocida, vegetales, queso rallado, lechuga y salsa al gusto.</li>
                    <li>Sirve los tacos calientes y ¡disfruta de esta deliciosa comida mexicana!</li>
                </ol>
                <h3>Video:</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
            `;
            break;

        // Agrega más casos para más platos si es necesario

        default:
            receta.innerHTML = '<p>No se encontró la receta para este plato.</p>';
    }

    // Mostrar la receta
    receta.style.display = 'block';
}

            

