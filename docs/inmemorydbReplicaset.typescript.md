# `inmemorydbReplicaset` Submodule <a name="`inmemorydbReplicaset` Submodule" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InmemorydbReplicaset <a name="InmemorydbReplicaset" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset ionoscloud_inmemorydb_replicaset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer"></a>

```typescript
import { inmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

new inmemorydbReplicaset.InmemorydbReplicaset(scope: Construct, id: string, config: InmemorydbReplicasetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig">InmemorydbReplicasetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig">InmemorydbReplicasetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putConnections">putConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetInitialSnapshotId">resetInitialSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnections` <a name="putConnections" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putConnections"></a>

```typescript
public putConnections(value: InmemorydbReplicasetConnections): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putConnections.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a>

---

##### `putCredentials` <a name="putCredentials" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putCredentials"></a>

```typescript
public putCredentials(value: InmemorydbReplicasetCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putMaintenanceWindow"></a>

```typescript
public putMaintenanceWindow(value: InmemorydbReplicasetMaintenanceWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a>

---

##### `putResources` <a name="putResources" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putResources"></a>

```typescript
public putResources(value: InmemorydbReplicasetResources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putTimeouts"></a>

```typescript
public putTimeouts(value: InmemorydbReplicasetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts">InmemorydbReplicasetTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitialSnapshotId` <a name="resetInitialSnapshotId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetInitialSnapshotId"></a>

```typescript
public resetInitialSnapshotId(): void
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetMaintenanceWindow"></a>

```typescript
public resetMaintenanceWindow(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a InmemorydbReplicaset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isConstruct"></a>

```typescript
import { inmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

inmemorydbReplicaset.InmemorydbReplicaset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isTerraformElement"></a>

```typescript
import { inmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

inmemorydbReplicaset.InmemorydbReplicaset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isTerraformResource"></a>

```typescript
import { inmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

inmemorydbReplicaset.InmemorydbReplicaset.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.generateConfigForImport"></a>

```typescript
import { inmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

inmemorydbReplicaset.InmemorydbReplicaset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a InmemorydbReplicaset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the InmemorydbReplicaset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing InmemorydbReplicaset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the InmemorydbReplicaset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference">InmemorydbReplicasetConnectionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference">InmemorydbReplicasetCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference">InmemorydbReplicasetMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference">InmemorydbReplicasetResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference">InmemorydbReplicasetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.connectionsInput">connectionsInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.credentialsInput">credentialsInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.evictionPolicyInput">evictionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.initialSnapshotIdInput">initialSnapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.persistenceModeInput">persistenceModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.replicasInput">replicasInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.resourcesInput">resourcesInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts">InmemorydbReplicasetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.evictionPolicy">evictionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.initialSnapshotId">initialSnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.persistenceMode">persistenceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.replicas">replicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.connections"></a>

```typescript
public readonly connections: InmemorydbReplicasetConnectionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference">InmemorydbReplicasetConnectionsOutputReference</a>

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.credentials"></a>

```typescript
public readonly credentials: InmemorydbReplicasetCredentialsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference">InmemorydbReplicasetCredentialsOutputReference</a>

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: InmemorydbReplicasetMaintenanceWindowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference">InmemorydbReplicasetMaintenanceWindowOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.resources"></a>

```typescript
public readonly resources: InmemorydbReplicasetResourcesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference">InmemorydbReplicasetResourcesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.timeouts"></a>

```typescript
public readonly timeouts: InmemorydbReplicasetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference">InmemorydbReplicasetTimeoutsOutputReference</a>

---

##### `connectionsInput`<sup>Optional</sup> <a name="connectionsInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.connectionsInput"></a>

```typescript
public readonly connectionsInput: InmemorydbReplicasetConnections;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a>

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: InmemorydbReplicasetCredentials;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `evictionPolicyInput`<sup>Optional</sup> <a name="evictionPolicyInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.evictionPolicyInput"></a>

```typescript
public readonly evictionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initialSnapshotIdInput`<sup>Optional</sup> <a name="initialSnapshotIdInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.initialSnapshotIdInput"></a>

```typescript
public readonly initialSnapshotIdInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: InmemorydbReplicasetMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a>

---

##### `persistenceModeInput`<sup>Optional</sup> <a name="persistenceModeInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.persistenceModeInput"></a>

```typescript
public readonly persistenceModeInput: string;
```

- *Type:* string

---

##### `replicasInput`<sup>Optional</sup> <a name="replicasInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.replicasInput"></a>

```typescript
public readonly replicasInput: number;
```

- *Type:* number

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: InmemorydbReplicasetResources;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | InmemorydbReplicasetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts">InmemorydbReplicasetTimeouts</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `evictionPolicy`<sup>Required</sup> <a name="evictionPolicy" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.evictionPolicy"></a>

```typescript
public readonly evictionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initialSnapshotId`<sup>Required</sup> <a name="initialSnapshotId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.initialSnapshotId"></a>

```typescript
public readonly initialSnapshotId: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `persistenceMode`<sup>Required</sup> <a name="persistenceMode" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.persistenceMode"></a>

```typescript
public readonly persistenceMode: string;
```

- *Type:* string

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicaset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### InmemorydbReplicasetConfig <a name="InmemorydbReplicasetConfig" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.Initializer"></a>

```typescript
import { inmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

const inmemorydbReplicasetConfig: inmemorydbReplicaset.InmemorydbReplicasetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a></code> | connections block. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a></code> | credentials block. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.displayName">displayName</a></code> | <code>string</code> | The human readable name of your replica set. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.evictionPolicy">evictionPolicy</a></code> | <code>string</code> | The eviction policy for the replica set. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.location">location</a></code> | <code>string</code> | The replica set location. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.persistenceMode">persistenceMode</a></code> | <code>string</code> | Specifies How and If data is persisted. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.replicas">replicas</a></code> | <code>number</code> | The total number of replicas in the replica set (one active and n-1 passive). |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.version">version</a></code> | <code>string</code> | The InMemoryDB version of your replica set. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#id InmemorydbReplicaset#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.initialSnapshotId">initialSnapshotId</a></code> | <code>string</code> | The ID of a snapshot to restore the replica set from. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts">InmemorydbReplicasetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.connections"></a>

```typescript
public readonly connections: InmemorydbReplicasetConnections;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a>

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#connections InmemorydbReplicaset#connections}

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.credentials"></a>

```typescript
public readonly credentials: InmemorydbReplicasetCredentials;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#credentials InmemorydbReplicaset#credentials}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human readable name of your replica set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#display_name InmemorydbReplicaset#display_name}

---

##### `evictionPolicy`<sup>Required</sup> <a name="evictionPolicy" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.evictionPolicy"></a>

```typescript
public readonly evictionPolicy: string;
```

- *Type:* string

The eviction policy for the replica set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#eviction_policy InmemorydbReplicaset#eviction_policy}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The replica set location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#location InmemorydbReplicaset#location}

---

##### `persistenceMode`<sup>Required</sup> <a name="persistenceMode" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.persistenceMode"></a>

```typescript
public readonly persistenceMode: string;
```

- *Type:* string

Specifies How and If data is persisted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#persistence_mode InmemorydbReplicaset#persistence_mode}

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

The total number of replicas in the replica set (one active and n-1 passive).

In case of a standalone instance, the value is 1. In all other cases, the value is > 1. The replicas will not be available as read replicas, they are only standby for a failure of the active instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#replicas InmemorydbReplicaset#replicas}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.resources"></a>

```typescript
public readonly resources: InmemorydbReplicasetResources;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#resources InmemorydbReplicaset#resources}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The InMemoryDB version of your replica set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#version InmemorydbReplicaset#version}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#id InmemorydbReplicaset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialSnapshotId`<sup>Optional</sup> <a name="initialSnapshotId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.initialSnapshotId"></a>

```typescript
public readonly initialSnapshotId: string;
```

- *Type:* string

The ID of a snapshot to restore the replica set from.

If set, the replica set will be created from the snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#initial_snapshot_id InmemorydbReplicaset#initial_snapshot_id}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: InmemorydbReplicasetMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#maintenance_window InmemorydbReplicaset#maintenance_window}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: InmemorydbReplicasetTimeouts;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts">InmemorydbReplicasetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#timeouts InmemorydbReplicaset#timeouts}

---

### InmemorydbReplicasetConnections <a name="InmemorydbReplicasetConnections" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections.Initializer"></a>

```typescript
import { inmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

const inmemorydbReplicasetConnections: inmemorydbReplicaset.InmemorydbReplicasetConnections = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections.property.cidr">cidr</a></code> | <code>string</code> | The IP and subnet for your instance. Note the following unavailable IP ranges: 10.233.64.0/18, 10.233.0.0/18, 10.233.114.0/24. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections.property.datacenterId">datacenterId</a></code> | <code>string</code> | The datacenter to connect your instance to. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections.property.lanId">lanId</a></code> | <code>string</code> | The numeric LAN ID to connect your instance to. |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

The IP and subnet for your instance. Note the following unavailable IP ranges: 10.233.64.0/18, 10.233.0.0/18, 10.233.114.0/24.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#cidr InmemorydbReplicaset#cidr}

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

The datacenter to connect your instance to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#datacenter_id InmemorydbReplicaset#datacenter_id}

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections.property.lanId"></a>

```typescript
public readonly lanId: string;
```

- *Type:* string

The numeric LAN ID to connect your instance to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#lan_id InmemorydbReplicaset#lan_id}

---

### InmemorydbReplicasetCredentials <a name="InmemorydbReplicasetCredentials" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials.Initializer"></a>

```typescript
import { inmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

const inmemorydbReplicasetCredentials: inmemorydbReplicaset.InmemorydbReplicasetCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials.property.username">username</a></code> | <code>string</code> | The username for the initial InMemoryDB user. Some system usernames are restricted (e.g. 'admin', 'standby'). |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials.property.hashedPassword">hashedPassword</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword">InmemorydbReplicasetCredentialsHashedPassword</a></code> | hashed_password block. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials.property.plainTextPassword">plainTextPassword</a></code> | <code>string</code> | The password for a InMemoryDB user. |

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The username for the initial InMemoryDB user. Some system usernames are restricted (e.g. 'admin', 'standby').

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#username InmemorydbReplicaset#username}

---

##### `hashedPassword`<sup>Optional</sup> <a name="hashedPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials.property.hashedPassword"></a>

```typescript
public readonly hashedPassword: InmemorydbReplicasetCredentialsHashedPassword;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword">InmemorydbReplicasetCredentialsHashedPassword</a>

hashed_password block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#hashed_password InmemorydbReplicaset#hashed_password}

---

##### `plainTextPassword`<sup>Optional</sup> <a name="plainTextPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials.property.plainTextPassword"></a>

```typescript
public readonly plainTextPassword: string;
```

- *Type:* string

The password for a InMemoryDB user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#plain_text_password InmemorydbReplicaset#plain_text_password}

---

### InmemorydbReplicasetCredentialsHashedPassword <a name="InmemorydbReplicasetCredentialsHashedPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword.Initializer"></a>

```typescript
import { inmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

const inmemorydbReplicasetCredentialsHashedPassword: inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword.property.algorithm">algorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#algorithm InmemorydbReplicaset#algorithm}. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword.property.hash">hash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#hash InmemorydbReplicaset#hash}. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#algorithm InmemorydbReplicaset#algorithm}.

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword.property.hash"></a>

```typescript
public readonly hash: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#hash InmemorydbReplicaset#hash}.

---

### InmemorydbReplicasetMaintenanceWindow <a name="InmemorydbReplicasetMaintenanceWindow" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow.Initializer"></a>

```typescript
import { inmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

const inmemorydbReplicasetMaintenanceWindow: inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow.property.dayOfTheWeek">dayOfTheWeek</a></code> | <code>string</code> | The name of the week day. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow.property.time">time</a></code> | <code>string</code> | Start of the maintenance window in UTC time. |

---

##### `dayOfTheWeek`<sup>Required</sup> <a name="dayOfTheWeek" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow.property.dayOfTheWeek"></a>

```typescript
public readonly dayOfTheWeek: string;
```

- *Type:* string

The name of the week day.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#day_of_the_week InmemorydbReplicaset#day_of_the_week}

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

Start of the maintenance window in UTC time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#time InmemorydbReplicaset#time}

---

### InmemorydbReplicasetResources <a name="InmemorydbReplicasetResources" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources.Initializer"></a>

```typescript
import { inmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

const inmemorydbReplicasetResources: inmemorydbReplicaset.InmemorydbReplicasetResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources.property.cores">cores</a></code> | <code>number</code> | The number of CPU cores per instance. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources.property.ram">ram</a></code> | <code>number</code> | The amount of memory per instance in gigabytes (GB). |

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources.property.cores"></a>

```typescript
public readonly cores: number;
```

- *Type:* number

The number of CPU cores per instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#cores InmemorydbReplicaset#cores}

---

##### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources.property.ram"></a>

```typescript
public readonly ram: number;
```

- *Type:* number

The amount of memory per instance in gigabytes (GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#ram InmemorydbReplicaset#ram}

---

### InmemorydbReplicasetTimeouts <a name="InmemorydbReplicasetTimeouts" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.Initializer"></a>

```typescript
import { inmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

const inmemorydbReplicasetTimeouts: inmemorydbReplicaset.InmemorydbReplicasetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#create InmemorydbReplicaset#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#default InmemorydbReplicaset#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#delete InmemorydbReplicaset#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#update InmemorydbReplicaset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#create InmemorydbReplicaset#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#default InmemorydbReplicaset#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#delete InmemorydbReplicaset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.8/docs/resources/inmemorydb_replicaset#update InmemorydbReplicaset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### InmemorydbReplicasetConnectionsOutputReference <a name="InmemorydbReplicasetConnectionsOutputReference" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.Initializer"></a>

```typescript
import { inmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

new inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.datacenterIdInput">datacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.lanIdInput">lanIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.datacenterId">datacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.lanId">lanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `datacenterIdInput`<sup>Optional</sup> <a name="datacenterIdInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.datacenterIdInput"></a>

```typescript
public readonly datacenterIdInput: string;
```

- *Type:* string

---

##### `lanIdInput`<sup>Optional</sup> <a name="lanIdInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.lanIdInput"></a>

```typescript
public readonly lanIdInput: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.lanId"></a>

```typescript
public readonly lanId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: InmemorydbReplicasetConnections;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetConnections">InmemorydbReplicasetConnections</a>

---


### InmemorydbReplicasetCredentialsHashedPasswordOutputReference <a name="InmemorydbReplicasetCredentialsHashedPasswordOutputReference" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.Initializer"></a>

```typescript
import { inmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

new inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.hashInput">hashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.hash">hash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword">InmemorydbReplicasetCredentialsHashedPassword</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: string;
```

- *Type:* string

---

##### `hashInput`<sup>Optional</sup> <a name="hashInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.hashInput"></a>

```typescript
public readonly hashInput: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.hash"></a>

```typescript
public readonly hash: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: InmemorydbReplicasetCredentialsHashedPassword;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword">InmemorydbReplicasetCredentialsHashedPassword</a>

---


### InmemorydbReplicasetCredentialsOutputReference <a name="InmemorydbReplicasetCredentialsOutputReference" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.Initializer"></a>

```typescript
import { inmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

new inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.putHashedPassword">putHashedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.resetHashedPassword">resetHashedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.resetPlainTextPassword">resetPlainTextPassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHashedPassword` <a name="putHashedPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.putHashedPassword"></a>

```typescript
public putHashedPassword(value: InmemorydbReplicasetCredentialsHashedPassword): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.putHashedPassword.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword">InmemorydbReplicasetCredentialsHashedPassword</a>

---

##### `resetHashedPassword` <a name="resetHashedPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.resetHashedPassword"></a>

```typescript
public resetHashedPassword(): void
```

##### `resetPlainTextPassword` <a name="resetPlainTextPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.resetPlainTextPassword"></a>

```typescript
public resetPlainTextPassword(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.hashedPassword">hashedPassword</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference">InmemorydbReplicasetCredentialsHashedPasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.hashedPasswordInput">hashedPasswordInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword">InmemorydbReplicasetCredentialsHashedPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.plainTextPasswordInput">plainTextPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.plainTextPassword">plainTextPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hashedPassword`<sup>Required</sup> <a name="hashedPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.hashedPassword"></a>

```typescript
public readonly hashedPassword: InmemorydbReplicasetCredentialsHashedPasswordOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPasswordOutputReference">InmemorydbReplicasetCredentialsHashedPasswordOutputReference</a>

---

##### `hashedPasswordInput`<sup>Optional</sup> <a name="hashedPasswordInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.hashedPasswordInput"></a>

```typescript
public readonly hashedPasswordInput: InmemorydbReplicasetCredentialsHashedPassword;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsHashedPassword">InmemorydbReplicasetCredentialsHashedPassword</a>

---

##### `plainTextPasswordInput`<sup>Optional</sup> <a name="plainTextPasswordInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.plainTextPasswordInput"></a>

```typescript
public readonly plainTextPasswordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `plainTextPassword`<sup>Required</sup> <a name="plainTextPassword" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.plainTextPassword"></a>

```typescript
public readonly plainTextPassword: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: InmemorydbReplicasetCredentials;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetCredentials">InmemorydbReplicasetCredentials</a>

---


### InmemorydbReplicasetMaintenanceWindowOutputReference <a name="InmemorydbReplicasetMaintenanceWindowOutputReference" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { inmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

new inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.dayOfTheWeekInput">dayOfTheWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.timeInput">timeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.dayOfTheWeek">dayOfTheWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfTheWeekInput`<sup>Optional</sup> <a name="dayOfTheWeekInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.dayOfTheWeekInput"></a>

```typescript
public readonly dayOfTheWeekInput: string;
```

- *Type:* string

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.timeInput"></a>

```typescript
public readonly timeInput: string;
```

- *Type:* string

---

##### `dayOfTheWeek`<sup>Required</sup> <a name="dayOfTheWeek" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.dayOfTheWeek"></a>

```typescript
public readonly dayOfTheWeek: string;
```

- *Type:* string

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: InmemorydbReplicasetMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetMaintenanceWindow">InmemorydbReplicasetMaintenanceWindow</a>

---


### InmemorydbReplicasetResourcesOutputReference <a name="InmemorydbReplicasetResourcesOutputReference" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.Initializer"></a>

```typescript
import { inmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

new inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.storage">storage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.coresInput">coresInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.ramInput">ramInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.cores">cores</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.ram">ram</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.storage"></a>

```typescript
public readonly storage: number;
```

- *Type:* number

---

##### `coresInput`<sup>Optional</sup> <a name="coresInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.coresInput"></a>

```typescript
public readonly coresInput: number;
```

- *Type:* number

---

##### `ramInput`<sup>Optional</sup> <a name="ramInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.ramInput"></a>

```typescript
public readonly ramInput: number;
```

- *Type:* number

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.cores"></a>

```typescript
public readonly cores: number;
```

- *Type:* number

---

##### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.ram"></a>

```typescript
public readonly ram: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: InmemorydbReplicasetResources;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetResources">InmemorydbReplicasetResources</a>

---


### InmemorydbReplicasetTimeoutsOutputReference <a name="InmemorydbReplicasetTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.Initializer"></a>

```typescript
import { inmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

new inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts">InmemorydbReplicasetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InmemorydbReplicasetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.inmemorydbReplicaset.InmemorydbReplicasetTimeouts">InmemorydbReplicasetTimeouts</a>

---



