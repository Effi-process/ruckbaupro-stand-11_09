'use client';

import Icon from './Icon';

/**
 * Beispiel-Komponente zur Demonstration der Icon-Verwendung
 */
export default function IconExample() {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Icon-Komponenten Beispiele</h2>
      
      {/* Größen-Beispiele */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Verschiedene Größen:</h3>
        <div className="flex items-center gap-4">
          <Icon name="shield" size="small" />
          <Icon name="shield" size="medium" />
          <Icon name="shield" size="large" />
          <Icon name="shield" size="xlarge" />
        </div>
      </div>

      {/* Farben-Beispiele */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Verschiedene Farben:</h3>
        <div className="flex items-center gap-4">
          <Icon name="warning" color="#ff0000" />
          <Icon name="certificate" color="#00ff00" />
          <Icon name="clock" color="#0066CC" />
          <Icon name="building" className="text-purple-600" />
        </div>
      </div>

      {/* Alle verfügbaren Icons */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Alle verfügbaren Icons:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-cols-8 gap-4">
          <div className="text-center">
            <Icon name="shield" className="mx-auto mb-1" />
            <p className="text-xs">shield</p>
          </div>
          <div className="text-center">
            <Icon name="warning" className="mx-auto mb-1" />
            <p className="text-xs">warning</p>
          </div>
          <div className="text-center">
            <Icon name="certificate" className="mx-auto mb-1" />
            <p className="text-xs">certificate</p>
          </div>
          <div className="text-center">
            <Icon name="clock" className="mx-auto mb-1" />
            <p className="text-xs">clock</p>
          </div>
          <div className="text-center">
            <Icon name="building" className="mx-auto mb-1" />
            <p className="text-xs">building</p>
          </div>
          <div className="text-center">
            <Icon name="checkCircle" className="mx-auto mb-1" />
            <p className="text-xs">checkCircle</p>
          </div>
          <div className="text-center">
            <Icon name="users" className="mx-auto mb-1" />
            <p className="text-xs">users</p>
          </div>
          <div className="text-center">
            <Icon name="phone" className="mx-auto mb-1" />
            <p className="text-xs">phone</p>
          </div>
          <div className="text-center">
            <Icon name="mail" className="mx-auto mb-1" />
            <p className="text-xs">mail</p>
          </div>
          <div className="text-center">
            <Icon name="location" className="mx-auto mb-1" />
            <p className="text-xs">location</p>
          </div>
          <div className="text-center">
            <Icon name="trash" className="mx-auto mb-1" />
            <p className="text-xs">trash</p>
          </div>
          <div className="text-center">
            <Icon name="safety" className="mx-auto mb-1" />
            <p className="text-xs">safety</p>
          </div>
          <div className="text-center">
            <Icon name="document" className="mx-auto mb-1" />
            <p className="text-xs">document</p>
          </div>
          <div className="text-center">
            <Icon name="arrow" className="mx-auto mb-1" />
            <p className="text-xs">arrow</p>
          </div>
        </div>
      </div>

      {/* Verwendungsbeispiele */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Verwendungsbeispiele:</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-2 p-4 bg-blue-50 rounded-lg">
            <Icon name="shield" className="text-blue-600" />
            <span>Zertifizierte Asbestsanierung</span>
          </div>
          <div className="flex items-center gap-2 p-4 bg-yellow-50 rounded-lg">
            <Icon name="warning" className="text-yellow-600" />
            <span>Achtung: Asbestgefahr</span>
          </div>
          <div className="flex items-center gap-2 p-4 bg-green-50 rounded-lg">
            <Icon name="checkCircle" className="text-green-600" />
            <span>Sicher entsorgt</span>
          </div>
        </div>
      </div>

      {/* Code-Beispiel */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Code-Beispiel:</h3>
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{`import Icon from './Icon';

// Basis-Verwendung
<Icon name="shield" />

// Mit Größe
<Icon name="warning" size="large" />

// Mit Farbe
<Icon name="certificate" color="#00ff00" />

// Mit Tailwind-Klassen
<Icon name="clock" className="text-blue-600" />`}</code>
        </pre>
      </div>
    </div>
  );
}