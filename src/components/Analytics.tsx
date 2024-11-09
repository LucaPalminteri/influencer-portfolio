import { Stat } from "@/types";
import { Card } from "./ui/card";
import React from "react";

export function Analytics({ stats }: { stats: Stat[] }) {
  return (
    <section className="px-4 py-16 bg-background">
      <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Profile Analytics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="p-6 text-center bg-white/50 backdrop-blur-sm border border-primary/10 shadow-lg hover:shadow-xl transition-shadow"
          >
            {React.createElement(stat.icon, {
              className: "w-12 h-12 mx-auto mb-4 text-primary",
            })}
            <h3 className="text-2xl font-bold mb-2 text-foreground">{stat.value}</h3>
            <p className="text-muted-foreground font-medium">{stat.name}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
