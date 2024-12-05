# `cubeServer` Submodule <a name="`cubeServer` Submodule" id="@cdktf/provider-ionoscloud.cubeServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CubeServer <a name="CubeServer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server ionoscloud_cube_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer"></a>

```typescript
import { cubeServer } from '@cdktf/provider-ionoscloud'

new cubeServer.CubeServer(scope: Construct, id: string, config: CubeServerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig">CubeServerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig">CubeServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.putNic">putNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.putVolume">putVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetAllowReplace">resetAllowReplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetBootCdrom">resetBootCdrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetBootImage">resetBootImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetImageName">resetImageName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetImagePassword">resetImagePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetSecurityGroupsIds">resetSecurityGroupsIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetSshKeyPath">resetSshKeyPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetVmState">resetVmState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNic` <a name="putNic" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putNic"></a>

```typescript
public putNic(value: CubeServerNic): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putNic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putTimeouts"></a>

```typescript
public putTimeouts(value: CubeServerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a>

---

##### `putVolume` <a name="putVolume" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putVolume"></a>

```typescript
public putVolume(value: CubeServerVolume): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.putVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a>

---

##### `resetAllowReplace` <a name="resetAllowReplace" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetAllowReplace"></a>

```typescript
public resetAllowReplace(): void
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetBootCdrom` <a name="resetBootCdrom" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetBootCdrom"></a>

```typescript
public resetBootCdrom(): void
```

##### `resetBootImage` <a name="resetBootImage" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetBootImage"></a>

```typescript
public resetBootImage(): void
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageName` <a name="resetImageName" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetImageName"></a>

```typescript
public resetImageName(): void
```

##### `resetImagePassword` <a name="resetImagePassword" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetImagePassword"></a>

```typescript
public resetImagePassword(): void
```

##### `resetSecurityGroupsIds` <a name="resetSecurityGroupsIds" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetSecurityGroupsIds"></a>

```typescript
public resetSecurityGroupsIds(): void
```

##### `resetSshKeyPath` <a name="resetSshKeyPath" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetSshKeyPath"></a>

```typescript
public resetSshKeyPath(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVmState` <a name="resetVmState" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.resetVmState"></a>

```typescript
public resetVmState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CubeServer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isConstruct"></a>

```typescript
import { cubeServer } from '@cdktf/provider-ionoscloud'

cubeServer.CubeServer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformElement"></a>

```typescript
import { cubeServer } from '@cdktf/provider-ionoscloud'

cubeServer.CubeServer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformResource"></a>

```typescript
import { cubeServer } from '@cdktf/provider-ionoscloud'

cubeServer.CubeServer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.generateConfigForImport"></a>

```typescript
import { cubeServer } from '@cdktf/provider-ionoscloud'

cubeServer.CubeServer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CubeServer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CubeServer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CubeServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CubeServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootVolume">bootVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.firewallruleId">firewallruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.inlineVolumeIds">inlineVolumeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nic">nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference">CubeServerNicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.primaryIp">primaryIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.primaryNic">primaryNic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference">CubeServerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference">CubeServerVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.allowReplaceInput">allowReplaceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootCdromInput">bootCdromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootImageInput">bootImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.datacenterIdInput">datacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imageNameInput">imageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imagePasswordInput">imagePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nicInput">nicInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.securityGroupsIdsInput">securityGroupsIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.sshKeyPathInput">sshKeyPathInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.templateUuidInput">templateUuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.vmStateInput">vmStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.volumeInput">volumeInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.allowReplace">allowReplace</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootCdrom">bootCdrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootImage">bootImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.datacenterId">datacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imageName">imageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imagePassword">imagePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.securityGroupsIds">securityGroupsIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.sshKeyPath">sshKeyPath</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.templateUuid">templateUuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.vmState">vmState</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bootVolume`<sup>Required</sup> <a name="bootVolume" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootVolume"></a>

```typescript
public readonly bootVolume: string;
```

- *Type:* string

---

##### `firewallruleId`<sup>Required</sup> <a name="firewallruleId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.firewallruleId"></a>

```typescript
public readonly firewallruleId: string;
```

- *Type:* string

---

##### `inlineVolumeIds`<sup>Required</sup> <a name="inlineVolumeIds" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.inlineVolumeIds"></a>

```typescript
public readonly inlineVolumeIds: string[];
```

- *Type:* string[]

---

##### `nic`<sup>Required</sup> <a name="nic" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nic"></a>

```typescript
public readonly nic: CubeServerNicOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference">CubeServerNicOutputReference</a>

---

##### `primaryIp`<sup>Required</sup> <a name="primaryIp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.primaryIp"></a>

```typescript
public readonly primaryIp: string;
```

- *Type:* string

---

##### `primaryNic`<sup>Required</sup> <a name="primaryNic" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.primaryNic"></a>

```typescript
public readonly primaryNic: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.timeouts"></a>

```typescript
public readonly timeouts: CubeServerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference">CubeServerTimeoutsOutputReference</a>

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.volume"></a>

```typescript
public readonly volume: CubeServerVolumeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference">CubeServerVolumeOutputReference</a>

---

##### `allowReplaceInput`<sup>Optional</sup> <a name="allowReplaceInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.allowReplaceInput"></a>

```typescript
public readonly allowReplaceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `bootCdromInput`<sup>Optional</sup> <a name="bootCdromInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootCdromInput"></a>

```typescript
public readonly bootCdromInput: string;
```

- *Type:* string

---

##### `bootImageInput`<sup>Optional</sup> <a name="bootImageInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootImageInput"></a>

```typescript
public readonly bootImageInput: string;
```

- *Type:* string

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.datacenterIdInput"></a>

```typescript
public readonly datacenterIdInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageNameInput`<sup>Optional</sup> <a name="imageNameInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imageNameInput"></a>

```typescript
public readonly imageNameInput: string;
```

- *Type:* string

---

##### `imagePasswordInput`<sup>Optional</sup> <a name="imagePasswordInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imagePasswordInput"></a>

```typescript
public readonly imagePasswordInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nicInput`<sup>Optional</sup> <a name="nicInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.nicInput"></a>

```typescript
public readonly nicInput: CubeServerNic;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a>

---

##### `securityGroupsIdsInput`<sup>Optional</sup> <a name="securityGroupsIdsInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.securityGroupsIdsInput"></a>

```typescript
public readonly securityGroupsIdsInput: string[];
```

- *Type:* string[]

---

##### `sshKeyPathInput`<sup>Optional</sup> <a name="sshKeyPathInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.sshKeyPathInput"></a>

```typescript
public readonly sshKeyPathInput: string[];
```

- *Type:* string[]

---

##### `templateUuidInput`<sup>Optional</sup> <a name="templateUuidInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.templateUuidInput"></a>

```typescript
public readonly templateUuidInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CubeServerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a>

---

##### `vmStateInput`<sup>Optional</sup> <a name="vmStateInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.vmStateInput"></a>

```typescript
public readonly vmStateInput: string;
```

- *Type:* string

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.volumeInput"></a>

```typescript
public readonly volumeInput: CubeServerVolume;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a>

---

##### `allowReplace`<sup>Required</sup> <a name="allowReplace" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.allowReplace"></a>

```typescript
public readonly allowReplace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `bootCdrom`<sup>Required</sup> <a name="bootCdrom" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootCdrom"></a>

```typescript
public readonly bootCdrom: string;
```

- *Type:* string

---

##### `bootImage`<sup>Required</sup> <a name="bootImage" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.bootImage"></a>

```typescript
public readonly bootImage: string;
```

- *Type:* string

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageName`<sup>Required</sup> <a name="imageName" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

---

##### `imagePassword`<sup>Required</sup> <a name="imagePassword" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.imagePassword"></a>

```typescript
public readonly imagePassword: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `securityGroupsIds`<sup>Required</sup> <a name="securityGroupsIds" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.securityGroupsIds"></a>

```typescript
public readonly securityGroupsIds: string[];
```

- *Type:* string[]

---

##### `sshKeyPath`<sup>Required</sup> <a name="sshKeyPath" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.sshKeyPath"></a>

```typescript
public readonly sshKeyPath: string[];
```

- *Type:* string[]

---

##### `templateUuid`<sup>Required</sup> <a name="templateUuid" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.templateUuid"></a>

```typescript
public readonly templateUuid: string;
```

- *Type:* string

---

##### `vmState`<sup>Required</sup> <a name="vmState" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.vmState"></a>

```typescript
public readonly vmState: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CubeServerConfig <a name="CubeServerConfig" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.Initializer"></a>

```typescript
import { cubeServer } from '@cdktf/provider-ionoscloud'

const cubeServerConfig: cubeServer.CubeServerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.datacenterId">datacenterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#datacenter_id CubeServer#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#name CubeServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.nic">nic</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a></code> | nic block. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.templateUuid">templateUuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#template_uuid CubeServer#template_uuid}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.volume">volume</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a></code> | volume block. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.allowReplace">allowReplace</a></code> | <code>boolean \| cdktf.IResolvable</code> | When set to true, allows the update of immutable fields by destroying and re-creating the resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#availability_zone CubeServer#availability_zone}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.bootCdrom">bootCdrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#boot_cdrom CubeServer#boot_cdrom}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.bootImage">bootImage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#boot_image CubeServer#boot_image}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.hostname">hostname</a></code> | <code>string</code> | The hostname of the resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#id CubeServer#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.imageName">imageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#image_name CubeServer#image_name}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.imagePassword">imagePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#image_password CubeServer#image_password}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.securityGroupsIds">securityGroupsIds</a></code> | <code>string[]</code> | The list of Security Group IDs for the server. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.sshKeyPath">sshKeyPath</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#ssh_key_path CubeServer#ssh_key_path}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.vmState">vmState</a></code> | <code>string</code> | Sets the power state of the cube server. Possible values: `RUNNING` or `SUSPENDED`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#datacenter_id CubeServer#datacenter_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#name CubeServer#name}.

---

##### `nic`<sup>Required</sup> <a name="nic" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.nic"></a>

```typescript
public readonly nic: CubeServerNic;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a>

nic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#nic CubeServer#nic}

---

##### `templateUuid`<sup>Required</sup> <a name="templateUuid" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.templateUuid"></a>

```typescript
public readonly templateUuid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#template_uuid CubeServer#template_uuid}.

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.volume"></a>

```typescript
public readonly volume: CubeServerVolume;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a>

volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#volume CubeServer#volume}

---

##### `allowReplace`<sup>Optional</sup> <a name="allowReplace" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.allowReplace"></a>

```typescript
public readonly allowReplace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When set to true, allows the update of immutable fields by destroying and re-creating the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#allow_replace CubeServer#allow_replace}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#availability_zone CubeServer#availability_zone}.

---

##### `bootCdrom`<sup>Optional</sup> <a name="bootCdrom" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.bootCdrom"></a>

```typescript
public readonly bootCdrom: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#boot_cdrom CubeServer#boot_cdrom}.

---

##### `bootImage`<sup>Optional</sup> <a name="bootImage" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.bootImage"></a>

```typescript
public readonly bootImage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#boot_image CubeServer#boot_image}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

The hostname of the resource.

Allowed characters are a-z, 0-9 and - (minus). Hostname should not start with minus and should not be longer than 63 characters. If no value provided explicitly, it will be populated with the name of the server

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#hostname CubeServer#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#id CubeServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageName`<sup>Optional</sup> <a name="imageName" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.imageName"></a>

```typescript
public readonly imageName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#image_name CubeServer#image_name}.

---

##### `imagePassword`<sup>Optional</sup> <a name="imagePassword" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.imagePassword"></a>

```typescript
public readonly imagePassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#image_password CubeServer#image_password}.

---

##### `securityGroupsIds`<sup>Optional</sup> <a name="securityGroupsIds" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.securityGroupsIds"></a>

```typescript
public readonly securityGroupsIds: string[];
```

- *Type:* string[]

The list of Security Group IDs for the server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#security_groups_ids CubeServer#security_groups_ids}

---

##### `sshKeyPath`<sup>Optional</sup> <a name="sshKeyPath" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.sshKeyPath"></a>

```typescript
public readonly sshKeyPath: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#ssh_key_path CubeServer#ssh_key_path}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CubeServerTimeouts;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#timeouts CubeServer#timeouts}

---

##### `vmState`<sup>Optional</sup> <a name="vmState" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerConfig.property.vmState"></a>

```typescript
public readonly vmState: string;
```

- *Type:* string

Sets the power state of the cube server. Possible values: `RUNNING` or `SUSPENDED`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#vm_state CubeServer#vm_state}

---

### CubeServerNic <a name="CubeServerNic" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.Initializer"></a>

```typescript
import { cubeServer } from '@cdktf/provider-ionoscloud'

const cubeServerNic: cubeServer.CubeServerNic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.lan">lan</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#lan CubeServer#lan}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.dhcp">dhcp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#dhcp CubeServer#dhcp}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.dhcpv6">dhcpv6</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether this NIC receives an IPv6 address through DHCP. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewall">firewall</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a></code> | firewall block. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewallActive">firewallActive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#firewall_active CubeServer#firewall_active}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewallType">firewallType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#firewall_type CubeServer#firewall_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.ips">ips</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#ips CubeServer#ips}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | IPv6 CIDR block assigned to the NIC. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.ipv6Ips">ipv6Ips</a></code> | <code>string[]</code> | Collection for IPv6 addresses assigned to a nic. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.mac">mac</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#mac CubeServer#mac}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#name CubeServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.securityGroupsIds">securityGroupsIds</a></code> | <code>string[]</code> | The list of Security Group IDs for the NIC. |

---

##### `lan`<sup>Required</sup> <a name="lan" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.lan"></a>

```typescript
public readonly lan: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#lan CubeServer#lan}.

---

##### `dhcp`<sup>Optional</sup> <a name="dhcp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.dhcp"></a>

```typescript
public readonly dhcp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#dhcp CubeServer#dhcp}.

---

##### `dhcpv6`<sup>Optional</sup> <a name="dhcpv6" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.dhcpv6"></a>

```typescript
public readonly dhcpv6: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether this NIC receives an IPv6 address through DHCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#dhcpv6 CubeServer#dhcpv6}

---

##### `firewall`<sup>Optional</sup> <a name="firewall" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewall"></a>

```typescript
public readonly firewall: CubeServerNicFirewall;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a>

firewall block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#firewall CubeServer#firewall}

---

##### `firewallActive`<sup>Optional</sup> <a name="firewallActive" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewallActive"></a>

```typescript
public readonly firewallActive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#firewall_active CubeServer#firewall_active}.

---

##### `firewallType`<sup>Optional</sup> <a name="firewallType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.firewallType"></a>

```typescript
public readonly firewallType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#firewall_type CubeServer#firewall_type}.

---

##### `ips`<sup>Optional</sup> <a name="ips" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.ips"></a>

```typescript
public readonly ips: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#ips CubeServer#ips}.

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

IPv6 CIDR block assigned to the NIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#ipv6_cidr_block CubeServer#ipv6_cidr_block}

---

##### `ipv6Ips`<sup>Optional</sup> <a name="ipv6Ips" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.ipv6Ips"></a>

```typescript
public readonly ipv6Ips: string[];
```

- *Type:* string[]

Collection for IPv6 addresses assigned to a nic.

Explicitly assigned IPv6 addresses need to come from inside the IPv6 CIDR block assigned to the nic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#ipv6_ips CubeServer#ipv6_ips}

---

##### `mac`<sup>Optional</sup> <a name="mac" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.mac"></a>

```typescript
public readonly mac: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#mac CubeServer#mac}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#name CubeServer#name}.

---

##### `securityGroupsIds`<sup>Optional</sup> <a name="securityGroupsIds" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNic.property.securityGroupsIds"></a>

```typescript
public readonly securityGroupsIds: string[];
```

- *Type:* string[]

The list of Security Group IDs for the NIC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#security_groups_ids CubeServer#security_groups_ids}

---

### CubeServerNicFirewall <a name="CubeServerNicFirewall" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.Initializer"></a>

```typescript
import { cubeServer } from '@cdktf/provider-ionoscloud'

const cubeServerNicFirewall: cubeServer.CubeServerNicFirewall = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#protocol CubeServer#protocol}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.icmpCode">icmpCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#icmp_code CubeServer#icmp_code}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.icmpType">icmpType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#icmp_type CubeServer#icmp_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#name CubeServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.portRangeEnd">portRangeEnd</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#port_range_end CubeServer#port_range_end}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.portRangeStart">portRangeStart</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#port_range_start CubeServer#port_range_start}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.sourceIp">sourceIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#source_ip CubeServer#source_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.sourceMac">sourceMac</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#source_mac CubeServer#source_mac}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.targetIp">targetIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#target_ip CubeServer#target_ip}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#type CubeServer#type}. |

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#protocol CubeServer#protocol}.

---

##### `icmpCode`<sup>Optional</sup> <a name="icmpCode" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.icmpCode"></a>

```typescript
public readonly icmpCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#icmp_code CubeServer#icmp_code}.

---

##### `icmpType`<sup>Optional</sup> <a name="icmpType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.icmpType"></a>

```typescript
public readonly icmpType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#icmp_type CubeServer#icmp_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#name CubeServer#name}.

---

##### `portRangeEnd`<sup>Optional</sup> <a name="portRangeEnd" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.portRangeEnd"></a>

```typescript
public readonly portRangeEnd: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#port_range_end CubeServer#port_range_end}.

---

##### `portRangeStart`<sup>Optional</sup> <a name="portRangeStart" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.portRangeStart"></a>

```typescript
public readonly portRangeStart: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#port_range_start CubeServer#port_range_start}.

---

##### `sourceIp`<sup>Optional</sup> <a name="sourceIp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.sourceIp"></a>

```typescript
public readonly sourceIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#source_ip CubeServer#source_ip}.

---

##### `sourceMac`<sup>Optional</sup> <a name="sourceMac" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.sourceMac"></a>

```typescript
public readonly sourceMac: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#source_mac CubeServer#source_mac}.

---

##### `targetIp`<sup>Optional</sup> <a name="targetIp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.targetIp"></a>

```typescript
public readonly targetIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#target_ip CubeServer#target_ip}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#type CubeServer#type}.

---

### CubeServerTimeouts <a name="CubeServerTimeouts" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.Initializer"></a>

```typescript
import { cubeServer } from '@cdktf/provider-ionoscloud'

const cubeServerTimeouts: cubeServer.CubeServerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#create CubeServer#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#default CubeServer#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#delete CubeServer#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#update CubeServer#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#create CubeServer#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#default CubeServer#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#delete CubeServer#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#update CubeServer#update}.

---

### CubeServerVolume <a name="CubeServerVolume" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.Initializer"></a>

```typescript
import { cubeServer } from '@cdktf/provider-ionoscloud'

const cubeServerVolume: cubeServer.CubeServerVolume = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.diskType">diskType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#disk_type CubeServer#disk_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#availability_zone CubeServer#availability_zone}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.backupUnitId">backupUnitId</a></code> | <code>string</code> | The uuid of the Backup Unit that user has access to. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.bus">bus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#bus CubeServer#bus}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.imagePassword">imagePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#image_password CubeServer#image_password}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.licenceType">licenceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#licence_type CubeServer#licence_type}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#name CubeServer#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.sshKeyPath">sshKeyPath</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#ssh_key_path CubeServer#ssh_key_path}. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.userData">userData</a></code> | <code>string</code> | The cloud-init configuration for the volume as base64 encoded string. |

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#disk_type CubeServer#disk_type}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#availability_zone CubeServer#availability_zone}.

---

##### `backupUnitId`<sup>Optional</sup> <a name="backupUnitId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.backupUnitId"></a>

```typescript
public readonly backupUnitId: string;
```

- *Type:* string

The uuid of the Backup Unit that user has access to.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#backup_unit_id CubeServer#backup_unit_id}

---

##### `bus`<sup>Optional</sup> <a name="bus" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.bus"></a>

```typescript
public readonly bus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#bus CubeServer#bus}.

---

##### `imagePassword`<sup>Optional</sup> <a name="imagePassword" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.imagePassword"></a>

```typescript
public readonly imagePassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#image_password CubeServer#image_password}.

---

##### `licenceType`<sup>Optional</sup> <a name="licenceType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.licenceType"></a>

```typescript
public readonly licenceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#licence_type CubeServer#licence_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#name CubeServer#name}.

---

##### `sshKeyPath`<sup>Optional</sup> <a name="sshKeyPath" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.sshKeyPath"></a>

```typescript
public readonly sshKeyPath: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#ssh_key_path CubeServer#ssh_key_path}.

---

##### `userData`<sup>Optional</sup> <a name="userData" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

The cloud-init configuration for the volume as base64 encoded string.

The property is immutable and is only allowed to be set on a new volume creation. It is mandatory to provide either 'public image' or 'imageAlias' that has cloud-init compatibility in conjunction with this property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.5/docs/resources/cube_server#user_data CubeServer#user_data}

---

## Classes <a name="Classes" id="Classes"></a>

### CubeServerNicFirewallOutputReference <a name="CubeServerNicFirewallOutputReference" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.Initializer"></a>

```typescript
import { cubeServer } from '@cdktf/provider-ionoscloud'

new cubeServer.CubeServerNicFirewallOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetIcmpCode">resetIcmpCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetIcmpType">resetIcmpType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetPortRangeEnd">resetPortRangeEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetPortRangeStart">resetPortRangeStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetSourceIp">resetSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetSourceMac">resetSourceMac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetTargetIp">resetTargetIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIcmpCode` <a name="resetIcmpCode" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetIcmpCode"></a>

```typescript
public resetIcmpCode(): void
```

##### `resetIcmpType` <a name="resetIcmpType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetIcmpType"></a>

```typescript
public resetIcmpType(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPortRangeEnd` <a name="resetPortRangeEnd" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetPortRangeEnd"></a>

```typescript
public resetPortRangeEnd(): void
```

##### `resetPortRangeStart` <a name="resetPortRangeStart" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetPortRangeStart"></a>

```typescript
public resetPortRangeStart(): void
```

##### `resetSourceIp` <a name="resetSourceIp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetSourceIp"></a>

```typescript
public resetSourceIp(): void
```

##### `resetSourceMac` <a name="resetSourceMac" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetSourceMac"></a>

```typescript
public resetSourceMac(): void
```

##### `resetTargetIp` <a name="resetTargetIp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetTargetIp"></a>

```typescript
public resetTargetIp(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpCodeInput">icmpCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpTypeInput">icmpTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeEndInput">portRangeEndInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeStartInput">portRangeStartInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceIpInput">sourceIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceMacInput">sourceMacInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.targetIpInput">targetIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpCode">icmpCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpType">icmpType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeEnd">portRangeEnd</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeStart">portRangeStart</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceIp">sourceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceMac">sourceMac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.targetIp">targetIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `icmpCodeInput`<sup>Optional</sup> <a name="icmpCodeInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpCodeInput"></a>

```typescript
public readonly icmpCodeInput: string;
```

- *Type:* string

---

##### `icmpTypeInput`<sup>Optional</sup> <a name="icmpTypeInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpTypeInput"></a>

```typescript
public readonly icmpTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portRangeEndInput`<sup>Optional</sup> <a name="portRangeEndInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeEndInput"></a>

```typescript
public readonly portRangeEndInput: number;
```

- *Type:* number

---

##### `portRangeStartInput`<sup>Optional</sup> <a name="portRangeStartInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeStartInput"></a>

```typescript
public readonly portRangeStartInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `sourceIpInput`<sup>Optional</sup> <a name="sourceIpInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceIpInput"></a>

```typescript
public readonly sourceIpInput: string;
```

- *Type:* string

---

##### `sourceMacInput`<sup>Optional</sup> <a name="sourceMacInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceMacInput"></a>

```typescript
public readonly sourceMacInput: string;
```

- *Type:* string

---

##### `targetIpInput`<sup>Optional</sup> <a name="targetIpInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.targetIpInput"></a>

```typescript
public readonly targetIpInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `icmpCode`<sup>Required</sup> <a name="icmpCode" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpCode"></a>

```typescript
public readonly icmpCode: string;
```

- *Type:* string

---

##### `icmpType`<sup>Required</sup> <a name="icmpType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.icmpType"></a>

```typescript
public readonly icmpType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `portRangeEnd`<sup>Required</sup> <a name="portRangeEnd" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeEnd"></a>

```typescript
public readonly portRangeEnd: number;
```

- *Type:* number

---

##### `portRangeStart`<sup>Required</sup> <a name="portRangeStart" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.portRangeStart"></a>

```typescript
public readonly portRangeStart: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `sourceIp`<sup>Required</sup> <a name="sourceIp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceIp"></a>

```typescript
public readonly sourceIp: string;
```

- *Type:* string

---

##### `sourceMac`<sup>Required</sup> <a name="sourceMac" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.sourceMac"></a>

```typescript
public readonly sourceMac: string;
```

- *Type:* string

---

##### `targetIp`<sup>Required</sup> <a name="targetIp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.targetIp"></a>

```typescript
public readonly targetIp: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CubeServerNicFirewall;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a>

---


### CubeServerNicOutputReference <a name="CubeServerNicOutputReference" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.Initializer"></a>

```typescript
import { cubeServer } from '@cdktf/provider-ionoscloud'

new cubeServer.CubeServerNicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.putFirewall">putFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetDhcp">resetDhcp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetDhcpv6">resetDhcpv6</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewall">resetFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewallActive">resetFirewallActive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewallType">resetFirewallType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetIps">resetIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetIpv6CidrBlock">resetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetIpv6Ips">resetIpv6Ips</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetMac">resetMac</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetSecurityGroupsIds">resetSecurityGroupsIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFirewall` <a name="putFirewall" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.putFirewall"></a>

```typescript
public putFirewall(value: CubeServerNicFirewall): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.putFirewall.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a>

---

##### `resetDhcp` <a name="resetDhcp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetDhcp"></a>

```typescript
public resetDhcp(): void
```

##### `resetDhcpv6` <a name="resetDhcpv6" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetDhcpv6"></a>

```typescript
public resetDhcpv6(): void
```

##### `resetFirewall` <a name="resetFirewall" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewall"></a>

```typescript
public resetFirewall(): void
```

##### `resetFirewallActive` <a name="resetFirewallActive" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewallActive"></a>

```typescript
public resetFirewallActive(): void
```

##### `resetFirewallType` <a name="resetFirewallType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetFirewallType"></a>

```typescript
public resetFirewallType(): void
```

##### `resetIps` <a name="resetIps" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetIps"></a>

```typescript
public resetIps(): void
```

##### `resetIpv6CidrBlock` <a name="resetIpv6CidrBlock" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetIpv6CidrBlock"></a>

```typescript
public resetIpv6CidrBlock(): void
```

##### `resetIpv6Ips` <a name="resetIpv6Ips" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetIpv6Ips"></a>

```typescript
public resetIpv6Ips(): void
```

##### `resetMac` <a name="resetMac" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetMac"></a>

```typescript
public resetMac(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSecurityGroupsIds` <a name="resetSecurityGroupsIds" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.resetSecurityGroupsIds"></a>

```typescript
public resetSecurityGroupsIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.deviceNumber">deviceNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewall">firewall</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference">CubeServerNicFirewallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.pciSlot">pciSlot</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcpInput">dhcpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcpv6Input">dhcpv6Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallActiveInput">firewallActiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallInput">firewallInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallTypeInput">firewallTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipsInput">ipsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6CidrBlockInput">ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6IpsInput">ipv6IpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.lanInput">lanInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.macInput">macInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.securityGroupsIdsInput">securityGroupsIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcp">dhcp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcpv6">dhcpv6</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallActive">firewallActive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallType">firewallType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ips">ips</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6Ips">ipv6Ips</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.lan">lan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.mac">mac</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.securityGroupsIds">securityGroupsIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceNumber`<sup>Required</sup> <a name="deviceNumber" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.deviceNumber"></a>

```typescript
public readonly deviceNumber: number;
```

- *Type:* number

---

##### `firewall`<sup>Required</sup> <a name="firewall" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewall"></a>

```typescript
public readonly firewall: CubeServerNicFirewallOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewallOutputReference">CubeServerNicFirewallOutputReference</a>

---

##### `pciSlot`<sup>Required</sup> <a name="pciSlot" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.pciSlot"></a>

```typescript
public readonly pciSlot: number;
```

- *Type:* number

---

##### `dhcpInput`<sup>Optional</sup> <a name="dhcpInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcpInput"></a>

```typescript
public readonly dhcpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dhcpv6Input`<sup>Optional</sup> <a name="dhcpv6Input" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcpv6Input"></a>

```typescript
public readonly dhcpv6Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firewallActiveInput`<sup>Optional</sup> <a name="firewallActiveInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallActiveInput"></a>

```typescript
public readonly firewallActiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firewallInput`<sup>Optional</sup> <a name="firewallInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallInput"></a>

```typescript
public readonly firewallInput: CubeServerNicFirewall;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNicFirewall">CubeServerNicFirewall</a>

---

##### `firewallTypeInput`<sup>Optional</sup> <a name="firewallTypeInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallTypeInput"></a>

```typescript
public readonly firewallTypeInput: string;
```

- *Type:* string

---

##### `ipsInput`<sup>Optional</sup> <a name="ipsInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipsInput"></a>

```typescript
public readonly ipsInput: string[];
```

- *Type:* string[]

---

##### `ipv6CidrBlockInput`<sup>Optional</sup> <a name="ipv6CidrBlockInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6CidrBlockInput"></a>

```typescript
public readonly ipv6CidrBlockInput: string;
```

- *Type:* string

---

##### `ipv6IpsInput`<sup>Optional</sup> <a name="ipv6IpsInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6IpsInput"></a>

```typescript
public readonly ipv6IpsInput: string[];
```

- *Type:* string[]

---

##### `lanInput`<sup>Optional</sup> <a name="lanInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.lanInput"></a>

```typescript
public readonly lanInput: number;
```

- *Type:* number

---

##### `macInput`<sup>Optional</sup> <a name="macInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.macInput"></a>

```typescript
public readonly macInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `securityGroupsIdsInput`<sup>Optional</sup> <a name="securityGroupsIdsInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.securityGroupsIdsInput"></a>

```typescript
public readonly securityGroupsIdsInput: string[];
```

- *Type:* string[]

---

##### `dhcp`<sup>Required</sup> <a name="dhcp" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcp"></a>

```typescript
public readonly dhcp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `dhcpv6`<sup>Required</sup> <a name="dhcpv6" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.dhcpv6"></a>

```typescript
public readonly dhcpv6: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firewallActive`<sup>Required</sup> <a name="firewallActive" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallActive"></a>

```typescript
public readonly firewallActive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `firewallType`<sup>Required</sup> <a name="firewallType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.firewallType"></a>

```typescript
public readonly firewallType: string;
```

- *Type:* string

---

##### `ips`<sup>Required</sup> <a name="ips" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ips"></a>

```typescript
public readonly ips: string[];
```

- *Type:* string[]

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

---

##### `ipv6Ips`<sup>Required</sup> <a name="ipv6Ips" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.ipv6Ips"></a>

```typescript
public readonly ipv6Ips: string[];
```

- *Type:* string[]

---

##### `lan`<sup>Required</sup> <a name="lan" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.lan"></a>

```typescript
public readonly lan: number;
```

- *Type:* number

---

##### `mac`<sup>Required</sup> <a name="mac" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.mac"></a>

```typescript
public readonly mac: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `securityGroupsIds`<sup>Required</sup> <a name="securityGroupsIds" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.securityGroupsIds"></a>

```typescript
public readonly securityGroupsIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerNicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CubeServerNic;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerNic">CubeServerNic</a>

---


### CubeServerTimeoutsOutputReference <a name="CubeServerTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.Initializer"></a>

```typescript
import { cubeServer } from '@cdktf/provider-ionoscloud'

new cubeServer.CubeServerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CubeServerTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerTimeouts">CubeServerTimeouts</a>

---


### CubeServerVolumeOutputReference <a name="CubeServerVolumeOutputReference" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.Initializer"></a>

```typescript
import { cubeServer } from '@cdktf/provider-ionoscloud'

new cubeServer.CubeServerVolumeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetBackupUnitId">resetBackupUnitId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetBus">resetBus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetImagePassword">resetImagePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetLicenceType">resetLicenceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetSshKeyPath">resetSshKeyPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetUserData">resetUserData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetBackupUnitId` <a name="resetBackupUnitId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetBackupUnitId"></a>

```typescript
public resetBackupUnitId(): void
```

##### `resetBus` <a name="resetBus" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetBus"></a>

```typescript
public resetBus(): void
```

##### `resetImagePassword` <a name="resetImagePassword" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetImagePassword"></a>

```typescript
public resetImagePassword(): void
```

##### `resetLicenceType` <a name="resetLicenceType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetLicenceType"></a>

```typescript
public resetLicenceType(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetSshKeyPath` <a name="resetSshKeyPath" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetSshKeyPath"></a>

```typescript
public resetSshKeyPath(): void
```

##### `resetUserData` <a name="resetUserData" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.resetUserData"></a>

```typescript
public resetUserData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.bootServer">bootServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.cpuHotPlug">cpuHotPlug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.deviceNumber">deviceNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.discVirtioHotPlug">discVirtioHotPlug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.discVirtioHotUnplug">discVirtioHotUnplug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nicHotPlug">nicHotPlug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nicHotUnplug">nicHotUnplug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.pciSlot">pciSlot</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.ramHotPlug">ramHotPlug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.backupUnitIdInput">backupUnitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.busInput">busInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.diskTypeInput">diskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.imagePasswordInput">imagePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.licenceTypeInput">licenceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.sshKeyPathInput">sshKeyPathInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.userDataInput">userDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.backupUnitId">backupUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.bus">bus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.diskType">diskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.imagePassword">imagePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.licenceType">licenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.sshKeyPath">sshKeyPath</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.userData">userData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bootServer`<sup>Required</sup> <a name="bootServer" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.bootServer"></a>

```typescript
public readonly bootServer: string;
```

- *Type:* string

---

##### `cpuHotPlug`<sup>Required</sup> <a name="cpuHotPlug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.cpuHotPlug"></a>

```typescript
public readonly cpuHotPlug: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `deviceNumber`<sup>Required</sup> <a name="deviceNumber" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.deviceNumber"></a>

```typescript
public readonly deviceNumber: number;
```

- *Type:* number

---

##### `discVirtioHotPlug`<sup>Required</sup> <a name="discVirtioHotPlug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.discVirtioHotPlug"></a>

```typescript
public readonly discVirtioHotPlug: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `discVirtioHotUnplug`<sup>Required</sup> <a name="discVirtioHotUnplug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.discVirtioHotUnplug"></a>

```typescript
public readonly discVirtioHotUnplug: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `nicHotPlug`<sup>Required</sup> <a name="nicHotPlug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nicHotPlug"></a>

```typescript
public readonly nicHotPlug: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `nicHotUnplug`<sup>Required</sup> <a name="nicHotUnplug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nicHotUnplug"></a>

```typescript
public readonly nicHotUnplug: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `pciSlot`<sup>Required</sup> <a name="pciSlot" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.pciSlot"></a>

```typescript
public readonly pciSlot: number;
```

- *Type:* number

---

##### `ramHotPlug`<sup>Required</sup> <a name="ramHotPlug" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.ramHotPlug"></a>

```typescript
public readonly ramHotPlug: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `backupUnitIdInput`<sup>Optional</sup> <a name="backupUnitIdInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.backupUnitIdInput"></a>

```typescript
public readonly backupUnitIdInput: string;
```

- *Type:* string

---

##### `busInput`<sup>Optional</sup> <a name="busInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.busInput"></a>

```typescript
public readonly busInput: string;
```

- *Type:* string

---

##### `diskTypeInput`<sup>Optional</sup> <a name="diskTypeInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.diskTypeInput"></a>

```typescript
public readonly diskTypeInput: string;
```

- *Type:* string

---

##### `imagePasswordInput`<sup>Optional</sup> <a name="imagePasswordInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.imagePasswordInput"></a>

```typescript
public readonly imagePasswordInput: string;
```

- *Type:* string

---

##### `licenceTypeInput`<sup>Optional</sup> <a name="licenceTypeInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.licenceTypeInput"></a>

```typescript
public readonly licenceTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sshKeyPathInput`<sup>Optional</sup> <a name="sshKeyPathInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.sshKeyPathInput"></a>

```typescript
public readonly sshKeyPathInput: string[];
```

- *Type:* string[]

---

##### `userDataInput`<sup>Optional</sup> <a name="userDataInput" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.userDataInput"></a>

```typescript
public readonly userDataInput: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `backupUnitId`<sup>Required</sup> <a name="backupUnitId" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.backupUnitId"></a>

```typescript
public readonly backupUnitId: string;
```

- *Type:* string

---

##### `bus`<sup>Required</sup> <a name="bus" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.bus"></a>

```typescript
public readonly bus: string;
```

- *Type:* string

---

##### `diskType`<sup>Required</sup> <a name="diskType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.diskType"></a>

```typescript
public readonly diskType: string;
```

- *Type:* string

---

##### `imagePassword`<sup>Required</sup> <a name="imagePassword" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.imagePassword"></a>

```typescript
public readonly imagePassword: string;
```

- *Type:* string

---

##### `licenceType`<sup>Required</sup> <a name="licenceType" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.licenceType"></a>

```typescript
public readonly licenceType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sshKeyPath`<sup>Required</sup> <a name="sshKeyPath" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.sshKeyPath"></a>

```typescript
public readonly sshKeyPath: string[];
```

- *Type:* string[]

---

##### `userData`<sup>Required</sup> <a name="userData" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.userData"></a>

```typescript
public readonly userData: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.cubeServer.CubeServerVolumeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CubeServerVolume;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cubeServer.CubeServerVolume">CubeServerVolume</a>

---



