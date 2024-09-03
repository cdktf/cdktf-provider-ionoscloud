# `serverBootDeviceSelection` Submodule <a name="`serverBootDeviceSelection` Submodule" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServerBootDeviceSelection <a name="ServerBootDeviceSelection" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/server_boot_device_selection ionoscloud_server_boot_device_selection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer"></a>

```typescript
import { serverBootDeviceSelection } from '@cdktf/provider-ionoscloud'

new serverBootDeviceSelection.ServerBootDeviceSelection(scope: Construct, id: string, config: ServerBootDeviceSelectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig">ServerBootDeviceSelectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig">ServerBootDeviceSelectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.resetBootDeviceId">resetBootDeviceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.putTimeouts"></a>

```typescript
public putTimeouts(value: ServerBootDeviceSelectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts">ServerBootDeviceSelectionTimeouts</a>

---

##### `resetBootDeviceId` <a name="resetBootDeviceId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.resetBootDeviceId"></a>

```typescript
public resetBootDeviceId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServerBootDeviceSelection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.isConstruct"></a>

```typescript
import { serverBootDeviceSelection } from '@cdktf/provider-ionoscloud'

serverBootDeviceSelection.ServerBootDeviceSelection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.isTerraformElement"></a>

```typescript
import { serverBootDeviceSelection } from '@cdktf/provider-ionoscloud'

serverBootDeviceSelection.ServerBootDeviceSelection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.isTerraformResource"></a>

```typescript
import { serverBootDeviceSelection } from '@cdktf/provider-ionoscloud'

serverBootDeviceSelection.ServerBootDeviceSelection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.generateConfigForImport"></a>

```typescript
import { serverBootDeviceSelection } from '@cdktf/provider-ionoscloud'

serverBootDeviceSelection.ServerBootDeviceSelection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ServerBootDeviceSelection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServerBootDeviceSelection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServerBootDeviceSelection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/server_boot_device_selection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServerBootDeviceSelection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.defaultBootVolumeId">defaultBootVolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference">ServerBootDeviceSelectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.bootDeviceIdInput">bootDeviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.datacenterIdInput">datacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.serverIdInput">serverIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts">ServerBootDeviceSelectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.bootDeviceId">bootDeviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.datacenterId">datacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.serverId">serverId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultBootVolumeId`<sup>Required</sup> <a name="defaultBootVolumeId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.defaultBootVolumeId"></a>

```typescript
public readonly defaultBootVolumeId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.timeouts"></a>

```typescript
public readonly timeouts: ServerBootDeviceSelectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference">ServerBootDeviceSelectionTimeoutsOutputReference</a>

---

##### `bootDeviceIdInput`<sup>Optional</sup> <a name="bootDeviceIdInput" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.bootDeviceIdInput"></a>

```typescript
public readonly bootDeviceIdInput: string;
```

- *Type:* string

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.datacenterIdInput"></a>

```typescript
public readonly datacenterIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `serverIdInput`<sup>Optional</sup> <a name="serverIdInput" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.serverIdInput"></a>

```typescript
public readonly serverIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ServerBootDeviceSelectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts">ServerBootDeviceSelectionTimeouts</a>

---

##### `bootDeviceId`<sup>Required</sup> <a name="bootDeviceId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.bootDeviceId"></a>

```typescript
public readonly bootDeviceId: string;
```

- *Type:* string

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServerBootDeviceSelectionConfig <a name="ServerBootDeviceSelectionConfig" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.Initializer"></a>

```typescript
import { serverBootDeviceSelection } from '@cdktf/provider-ionoscloud'

const serverBootDeviceSelectionConfig: serverBootDeviceSelection.ServerBootDeviceSelectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.datacenterId">datacenterId</a></code> | <code>string</code> | ID of the Datacenter that holds the server for which the boot volume is selected. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.serverId">serverId</a></code> | <code>string</code> | ID of the Server for which the boot device will be selected. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.bootDeviceId">bootDeviceId</a></code> | <code>string</code> | ID of the entity to set as primary boot device. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/server_boot_device_selection#id ServerBootDeviceSelection#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts">ServerBootDeviceSelectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

ID of the Datacenter that holds the server for which the boot volume is selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/server_boot_device_selection#datacenter_id ServerBootDeviceSelection#datacenter_id}

---

##### `serverId`<sup>Required</sup> <a name="serverId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.serverId"></a>

```typescript
public readonly serverId: string;
```

- *Type:* string

ID of the Server for which the boot device will be selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/server_boot_device_selection#server_id ServerBootDeviceSelection#server_id}

---

##### `bootDeviceId`<sup>Optional</sup> <a name="bootDeviceId" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.bootDeviceId"></a>

```typescript
public readonly bootDeviceId: string;
```

- *Type:* string

ID of the entity to set as primary boot device.

Possible boot devices are CDROM Images and Volumes. If omitted, server will boot from PXE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/server_boot_device_selection#boot_device_id ServerBootDeviceSelection#boot_device_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/server_boot_device_selection#id ServerBootDeviceSelection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServerBootDeviceSelectionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts">ServerBootDeviceSelectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/server_boot_device_selection#timeouts ServerBootDeviceSelection#timeouts}

---

### ServerBootDeviceSelectionTimeouts <a name="ServerBootDeviceSelectionTimeouts" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts.Initializer"></a>

```typescript
import { serverBootDeviceSelection } from '@cdktf/provider-ionoscloud'

const serverBootDeviceSelectionTimeouts: serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/server_boot_device_selection#create ServerBootDeviceSelection#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/server_boot_device_selection#default ServerBootDeviceSelection#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/server_boot_device_selection#delete ServerBootDeviceSelection#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/server_boot_device_selection#update ServerBootDeviceSelection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/server_boot_device_selection#create ServerBootDeviceSelection#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/server_boot_device_selection#default ServerBootDeviceSelection#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/server_boot_device_selection#delete ServerBootDeviceSelection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.3/docs/resources/server_boot_device_selection#update ServerBootDeviceSelection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServerBootDeviceSelectionTimeoutsOutputReference <a name="ServerBootDeviceSelectionTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { serverBootDeviceSelection } from '@cdktf/provider-ionoscloud'

new serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts">ServerBootDeviceSelectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ServerBootDeviceSelectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.serverBootDeviceSelection.ServerBootDeviceSelectionTimeouts">ServerBootDeviceSelectionTimeouts</a>

---



