# `dataplatformNodePool` Submodule <a name="`dataplatformNodePool` Submodule" id="@cdktf/provider-ionoscloud.dataplatformNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplatformNodePool <a name="DataplatformNodePool" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/dataplatform_node_pool ionoscloud_dataplatform_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer"></a>

```typescript
import { dataplatformNodePool } from '@cdktf/provider-ionoscloud'

new dataplatformNodePool.DataplatformNodePool(scope: Construct, id: string, config: DataplatformNodePoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig">DataplatformNodePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig">DataplatformNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetCoresCount">resetCoresCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetCpuFamily">resetCpuFamily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetRamSize">resetRamSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetStorageSize">resetStorageSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.putMaintenanceWindow"></a>

```typescript
public putMaintenanceWindow(value: IResolvable | DataplatformNodePoolMaintenanceWindow[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.putMaintenanceWindow.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow">DataplatformNodePoolMaintenanceWindow</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.putTimeouts"></a>

```typescript
public putTimeouts(value: DataplatformNodePoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts">DataplatformNodePoolTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetCoresCount` <a name="resetCoresCount" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetCoresCount"></a>

```typescript
public resetCoresCount(): void
```

##### `resetCpuFamily` <a name="resetCpuFamily" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetCpuFamily"></a>

```typescript
public resetCpuFamily(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetMaintenanceWindow"></a>

```typescript
public resetMaintenanceWindow(): void
```

##### `resetRamSize` <a name="resetRamSize" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetRamSize"></a>

```typescript
public resetRamSize(): void
```

##### `resetStorageSize` <a name="resetStorageSize" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetStorageSize"></a>

```typescript
public resetStorageSize(): void
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetStorageType"></a>

```typescript
public resetStorageType(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataplatformNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.isConstruct"></a>

```typescript
import { dataplatformNodePool } from '@cdktf/provider-ionoscloud'

dataplatformNodePool.DataplatformNodePool.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.isTerraformElement"></a>

```typescript
import { dataplatformNodePool } from '@cdktf/provider-ionoscloud'

dataplatformNodePool.DataplatformNodePool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.isTerraformResource"></a>

```typescript
import { dataplatformNodePool } from '@cdktf/provider-ionoscloud'

dataplatformNodePool.DataplatformNodePool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.generateConfigForImport"></a>

```typescript
import { dataplatformNodePool } from '@cdktf/provider-ionoscloud'

dataplatformNodePool.DataplatformNodePool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataplatformNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataplatformNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataplatformNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/dataplatform_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataplatformNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.datacenterId">datacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList">DataplatformNodePoolMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference">DataplatformNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.coresCountInput">coresCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.cpuFamilyInput">cpuFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow">DataplatformNodePoolMaintenanceWindow</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.nodeCountInput">nodeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.ramSizeInput">ramSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.storageSizeInput">storageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.storageTypeInput">storageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts">DataplatformNodePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.coresCount">coresCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.cpuFamily">cpuFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.ramSize">ramSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.storageSize">storageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: DataplatformNodePoolMaintenanceWindowList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList">DataplatformNodePoolMaintenanceWindowList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.timeouts"></a>

```typescript
public readonly timeouts: DataplatformNodePoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference">DataplatformNodePoolTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `coresCountInput`<sup>Optional</sup> <a name="coresCountInput" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.coresCountInput"></a>

```typescript
public readonly coresCountInput: number;
```

- *Type:* number

---

##### `cpuFamilyInput`<sup>Optional</sup> <a name="cpuFamilyInput" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.cpuFamilyInput"></a>

```typescript
public readonly cpuFamilyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: IResolvable | DataplatformNodePoolMaintenanceWindow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow">DataplatformNodePoolMaintenanceWindow</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.nodeCountInput"></a>

```typescript
public readonly nodeCountInput: number;
```

- *Type:* number

---

##### `ramSizeInput`<sup>Optional</sup> <a name="ramSizeInput" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.ramSizeInput"></a>

```typescript
public readonly ramSizeInput: number;
```

- *Type:* number

---

##### `storageSizeInput`<sup>Optional</sup> <a name="storageSizeInput" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.storageSizeInput"></a>

```typescript
public readonly storageSizeInput: number;
```

- *Type:* number

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.storageTypeInput"></a>

```typescript
public readonly storageTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataplatformNodePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts">DataplatformNodePoolTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `coresCount`<sup>Required</sup> <a name="coresCount" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.coresCount"></a>

```typescript
public readonly coresCount: number;
```

- *Type:* number

---

##### `cpuFamily`<sup>Required</sup> <a name="cpuFamily" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.cpuFamily"></a>

```typescript
public readonly cpuFamily: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `ramSize`<sup>Required</sup> <a name="ramSize" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.ramSize"></a>

```typescript
public readonly ramSize: number;
```

- *Type:* number

---

##### `storageSize`<sup>Required</sup> <a name="storageSize" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.storageSize"></a>

```typescript
public readonly storageSize: number;
```

- *Type:* number

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataplatformNodePoolConfig <a name="DataplatformNodePoolConfig" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.Initializer"></a>

```typescript
import { dataplatformNodePool } from '@cdktf/provider-ionoscloud'

const dataplatformNodePoolConfig: dataplatformNodePool.DataplatformNodePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.clusterId">clusterId</a></code> | <code>string</code> | The UUID of an existing Dataplatform cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.name">name</a></code> | <code>string</code> | The name of your node pool. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.nodeCount">nodeCount</a></code> | <code>number</code> | The number of nodes that make up the node pool. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | Key-value pairs attached to node pool resource as [Kubernetes annotations](https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/). |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | The availability zone of the virtual datacenter region where the node pool resources should be provisioned. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.coresCount">coresCount</a></code> | <code>number</code> | The number of CPU cores per node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.cpuFamily">cpuFamily</a></code> | <code>string</code> | A valid CPU family name or `AUTO` if the platform shall choose the best fitting option. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/dataplatform_node_pool#id DataplatformNodePool#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Key-value pairs attached to the node pool resource as [Kubernetes labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/). |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow">DataplatformNodePoolMaintenanceWindow</a>[]</code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.ramSize">ramSize</a></code> | <code>number</code> | The RAM size for one node in MB. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.storageSize">storageSize</a></code> | <code>number</code> | The size of the volume in GB. The size must be greater than 10GB. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.storageType">storageType</a></code> | <code>string</code> | The type of hardware for the volume. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts">DataplatformNodePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The UUID of an existing Dataplatform cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/dataplatform_node_pool#cluster_id DataplatformNodePool#cluster_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of your node pool.

Must be 63 characters or less and must be empty or begin and end with an alphanumeric character ([a-z0-9A-Z]). It can contain dashes (-), underscores (_), dots (.), and alphanumerics in-between.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/dataplatform_node_pool#name DataplatformNodePool#name}

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

The number of nodes that make up the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/dataplatform_node_pool#node_count DataplatformNodePool#node_count}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Key-value pairs attached to node pool resource as [Kubernetes annotations](https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/dataplatform_node_pool#annotations DataplatformNodePool#annotations}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

The availability zone of the virtual datacenter region where the node pool resources should be provisioned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/dataplatform_node_pool#availability_zone DataplatformNodePool#availability_zone}

---

##### `coresCount`<sup>Optional</sup> <a name="coresCount" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.coresCount"></a>

```typescript
public readonly coresCount: number;
```

- *Type:* number

The number of CPU cores per node.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/dataplatform_node_pool#cores_count DataplatformNodePool#cores_count}

---

##### `cpuFamily`<sup>Optional</sup> <a name="cpuFamily" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.cpuFamily"></a>

```typescript
public readonly cpuFamily: string;
```

- *Type:* string

A valid CPU family name or `AUTO` if the platform shall choose the best fitting option.

Available CPU architectures can be retrieved from the datacenter resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/dataplatform_node_pool#cpu_family DataplatformNodePool#cpu_family}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/dataplatform_node_pool#id DataplatformNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Key-value pairs attached to the node pool resource as [Kubernetes labels](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/dataplatform_node_pool#labels DataplatformNodePool#labels}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: IResolvable | DataplatformNodePoolMaintenanceWindow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow">DataplatformNodePoolMaintenanceWindow</a>[]

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/dataplatform_node_pool#maintenance_window DataplatformNodePool#maintenance_window}

---

##### `ramSize`<sup>Optional</sup> <a name="ramSize" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.ramSize"></a>

```typescript
public readonly ramSize: number;
```

- *Type:* number

The RAM size for one node in MB.

Must be set in multiples of 1024 MB, with a minimum size is of 2048 MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/dataplatform_node_pool#ram_size DataplatformNodePool#ram_size}

---

##### `storageSize`<sup>Optional</sup> <a name="storageSize" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.storageSize"></a>

```typescript
public readonly storageSize: number;
```

- *Type:* number

The size of the volume in GB. The size must be greater than 10GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/dataplatform_node_pool#storage_size DataplatformNodePool#storage_size}

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

The type of hardware for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/dataplatform_node_pool#storage_type DataplatformNodePool#storage_type}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataplatformNodePoolTimeouts;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts">DataplatformNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/dataplatform_node_pool#timeouts DataplatformNodePool#timeouts}

---

### DataplatformNodePoolMaintenanceWindow <a name="DataplatformNodePoolMaintenanceWindow" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow.Initializer"></a>

```typescript
import { dataplatformNodePool } from '@cdktf/provider-ionoscloud'

const dataplatformNodePoolMaintenanceWindow: dataplatformNodePool.DataplatformNodePoolMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow.property.dayOfTheWeek">dayOfTheWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/dataplatform_node_pool#day_of_the_week DataplatformNodePool#day_of_the_week}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow.property.time">time</a></code> | <code>string</code> | Time at which the maintenance should start. |

---

##### `dayOfTheWeek`<sup>Required</sup> <a name="dayOfTheWeek" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow.property.dayOfTheWeek"></a>

```typescript
public readonly dayOfTheWeek: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/dataplatform_node_pool#day_of_the_week DataplatformNodePool#day_of_the_week}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

Time at which the maintenance should start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/dataplatform_node_pool#time DataplatformNodePool#time}

---

### DataplatformNodePoolTimeouts <a name="DataplatformNodePoolTimeouts" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts.Initializer"></a>

```typescript
import { dataplatformNodePool } from '@cdktf/provider-ionoscloud'

const dataplatformNodePoolTimeouts: dataplatformNodePool.DataplatformNodePoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/dataplatform_node_pool#create DataplatformNodePool#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/dataplatform_node_pool#default DataplatformNodePool#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/dataplatform_node_pool#delete DataplatformNodePool#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/dataplatform_node_pool#update DataplatformNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/dataplatform_node_pool#create DataplatformNodePool#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/dataplatform_node_pool#default DataplatformNodePool#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/dataplatform_node_pool#delete DataplatformNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/resources/dataplatform_node_pool#update DataplatformNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplatformNodePoolMaintenanceWindowList <a name="DataplatformNodePoolMaintenanceWindowList" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.Initializer"></a>

```typescript
import { dataplatformNodePool } from '@cdktf/provider-ionoscloud'

new dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.get"></a>

```typescript
public get(index: number): DataplatformNodePoolMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow">DataplatformNodePoolMaintenanceWindow</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataplatformNodePoolMaintenanceWindow[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow">DataplatformNodePoolMaintenanceWindow</a>[]

---


### DataplatformNodePoolMaintenanceWindowOutputReference <a name="DataplatformNodePoolMaintenanceWindowOutputReference" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { dataplatformNodePool } from '@cdktf/provider-ionoscloud'

new dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.property.dayOfTheWeekInput">dayOfTheWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.property.timeInput">timeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.property.dayOfTheWeek">dayOfTheWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow">DataplatformNodePoolMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfTheWeekInput`<sup>Optional</sup> <a name="dayOfTheWeekInput" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.property.dayOfTheWeekInput"></a>

```typescript
public readonly dayOfTheWeekInput: string;
```

- *Type:* string

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: string;
```

- *Type:* string

---

##### `dayOfTheWeek`<sup>Required</sup> <a name="dayOfTheWeek" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.property.dayOfTheWeek"></a>

```typescript
public readonly dayOfTheWeek: string;
```

- *Type:* string

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataplatformNodePoolMaintenanceWindow;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolMaintenanceWindow">DataplatformNodePoolMaintenanceWindow</a>

---


### DataplatformNodePoolTimeoutsOutputReference <a name="DataplatformNodePoolTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataplatformNodePool } from '@cdktf/provider-ionoscloud'

new dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts">DataplatformNodePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataplatformNodePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataplatformNodePool.DataplatformNodePoolTimeouts">DataplatformNodePoolTimeouts</a>

---



