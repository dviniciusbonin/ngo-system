import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UnitType } from 'src/core/domain/entities/product';

class ItemDto {
  @ApiPropertyOptional({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'UUID do produto existente',
  })
  productId?: string;

  @ApiPropertyOptional({
    example: 'Arroz',
    description: 'Nome do produto',
  })
  productName?: string;

  @ApiProperty({
    example: UnitType.KG,
    description: 'Tipo de unidade do produto (KG ou UNIDADE)',
  })
  unitType: UnitType;

  @ApiProperty({
    example: 5,
    description: 'Quantidade do produto',
  })
  quantity: number;
}

export class CreatePackageDto {
  @ApiProperty({
    type: [ItemDto],
    description: 'Itens do pacote a ser recebido',
  })
  items: ItemDto[];
}
