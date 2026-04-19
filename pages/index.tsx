import * as React from 'react';
import * as Icon from '../src/icon';

function TechChip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gray-300 dark:border-gray-600 text-sm m-1 bg-white dark:bg-gray-800">
      <span className="w-4 h-4 flex-shrink-0">{icon}</span>
      {label}
    </span>
  );
}

export default function Index() {
  return (
    <div className="container mx-auto px-4">
      <div className="my-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4">Eugene Efremov</h1>
        <img
          alt="Eugene Efremov"
          src="https://avatars2.githubusercontent.com/u/1534306?s=460&v=4"
          className="rounded-full w-80 h-80 mb-4 object-cover"
        />
        <p className="mb-8">Software engineer. Kyiv, Ukraine. 🇺🇦</p>

        <p className="mb-3">Technology stack:</p>
        <div className="text-center mb-8">
          <TechChip icon={<Icon.GolangIcon />} label="Go" />
          <TechChip icon={<Icon.TypeScriptIcon />} label="TypeScript" />
          <TechChip icon={<Icon.JavaScriptIcon />} label="JavaScript" />
          <TechChip icon={<Icon.NodeJsIcon />} label="Node.js" />
          <TechChip icon={<Icon.NestJsIcon />} label="NestJS" />
          <TechChip icon={<Icon.NextJsIcon />} label="Next.js" />
          <TechChip icon={<Icon.PostgreSqlIcon />} label="PostgreSQL" />
          <TechChip icon={<Icon.RedisIcon />} label="Redis" />
          <TechChip icon={<Icon.MqttIcon />} label="MQTT" />
          <TechChip icon={<Icon.GnuLinuxIcon />} label="GNU/Linux" />
        </div>

        <p className="mb-3">Legacy:</p>
        <div className="text-center">
          <TechChip icon={<Icon.ScalaIcon />} label="Scala" />
          <TechChip icon={<Icon.FlutterIcon />} label="Flutter" />
          <TechChip icon={<Icon.CIcon />} label="C" />
          <TechChip icon={<Icon.CPlusPlusIcon />} label="C++" />
          <TechChip icon={<Icon.LuaIcon />} label="Lua" />
          <TechChip icon={<Icon.PythonIcon />} label="Python" />
          <TechChip icon={<Icon.PhpIcon />} label="PHP" />
          <TechChip icon={<Icon.JavaIcon />} label="Java" />
        </div>
      </div>
    </div>
  );
}
