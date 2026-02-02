# CHANGELOG

## [Unreleased]

### Added
- **FactoringNewOperation**: Implementado el encabezado estándar de EvoAgro que unifica la información del cliente con el stepper de progreso.
- **FactoringNewOperation**: Implementado sistema de tablas agrupadas por pagador tipo acordeón para la selección de facturas.
- **Components**: Agregado soporte para importación de imágenes `figma:asset` en componentes de factoring.

### Changed
- **DSM Migration**: Migración de la vista `FactoringNewOperation` para utilizar componentes del `@biomahd-creator/financio-design-system`.
- **UI/UX**: Refactorización del flujo de selección de facturas para mejorar la usabilidad con acordeones expandibles por deudor.
- **Progress**: Corrección de props `indicatorClassName` en el componente Progress para visualizar correctamente el uso de cupo.
- **Cleanup**: Eliminación de componentes redundantes (doble stepper) en la vista de nueva operación.

## [2.0.0] - 2026-01-15
### Added
- Lanzamiento inicial del Design System Manager v2.0.
- Catálogo completo de componentes Core, Business y Advanced.
- Documentación de arquitectura y tokens.
