import { ComponentShowcase } from "../components/ui/component-showcase";
import { CommentThread } from "../components/patterns/CommentThread";

const code = `import { CommentThread } from "@/components/patterns/CommentThread";

export function CommentThreadDemo() {
  return (
    <CommentThread 
      comments={[
        {
          id: "1",
          author: { name: "Juan Pérez", initials: "JP" },
          content: "¿Podemos revisar los términos de pago para este cliente?",
          timestamp: "Hace 2 horas",
          likes: 5,
          replies: [
             {
               id: "2",
               author: { name: "Laura Torres", initials: "LT" },
               content: "Claro, lo agendamos para la reunión de mañana.",
               timestamp: "Hace 1 hora",
               likes: 2
             }
          ]
        }
      ]}
    />
  );
}`;

export function CommentThreadPage() {
  return (
    <ComponentShowcase
      title="Comment Thread"
      description="Hilo de comentarios con respuestas anidadas."
      category="Business Pattern"
      preview={
        <CommentThread 
          comments={[
            {
              id: "1",
              author: { name: "Juan Pérez", initials: "JP" },
              content: "¿Podemos revisar los términos de pago para este cliente?",
              timestamp: "Hace 2 horas",
              likes: 5,
              replies: [
                 {
                   id: "2",
                   author: { name: "Laura Torres", initials: "LT" },
                   content: "Claro, lo agendamos para la reunión de mañana.",
                   timestamp: "Hace 1 hora",
                   likes: 2
                 }
              ]
            }
          ]}
        />
      }
      code={code}
    />
  );
}
