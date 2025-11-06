# `dataIonoscloudInmemorydbReplicaset` Submodule <a name="`dataIonoscloudInmemorydbReplicaset` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudInmemorydbReplicaset <a name="DataIonoscloudInmemorydbReplicaset" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.19/docs/data-sources/inmemorydb_replicaset ionoscloud_inmemorydb_replicaset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.Initializer"></a>

```typescript
import { dataIonoscloudInmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

new dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset(scope: Construct, id: string, config?: DataIonoscloudInmemorydbReplicasetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConfig">DataIonoscloudInmemorydbReplicasetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConfig">DataIonoscloudInmemorydbReplicasetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.putTimeouts"></a>

```typescript
public putTimeouts(value: DataIonoscloudInmemorydbReplicasetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeouts">DataIonoscloudInmemorydbReplicasetTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudInmemorydbReplicaset resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.isConstruct"></a>

```typescript
import { dataIonoscloudInmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.isTerraformElement"></a>

```typescript
import { dataIonoscloudInmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.isTerraformDataSource"></a>

```typescript
import { dataIonoscloudInmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.generateConfigForImport"></a>

```typescript
import { dataIonoscloudInmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataIonoscloudInmemorydbReplicaset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataIonoscloudInmemorydbReplicaset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataIonoscloudInmemorydbReplicaset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.19/docs/data-sources/inmemorydb_replicaset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudInmemorydbReplicaset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsList">DataIonoscloudInmemorydbReplicasetConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsList">DataIonoscloudInmemorydbReplicasetCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.evictionPolicy">evictionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowList">DataIonoscloudInmemorydbReplicasetMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.persistenceMode">persistenceMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.replicas">replicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesList">DataIonoscloudInmemorydbReplicasetResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference">DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeouts">DataIonoscloudInmemorydbReplicasetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.location">location</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.connections"></a>

```typescript
public readonly connections: DataIonoscloudInmemorydbReplicasetConnectionsList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsList">DataIonoscloudInmemorydbReplicasetConnectionsList</a>

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.credentials"></a>

```typescript
public readonly credentials: DataIonoscloudInmemorydbReplicasetCredentialsList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsList">DataIonoscloudInmemorydbReplicasetCredentialsList</a>

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `evictionPolicy`<sup>Required</sup> <a name="evictionPolicy" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.evictionPolicy"></a>

```typescript
public readonly evictionPolicy: string;
```

- *Type:* string

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: DataIonoscloudInmemorydbReplicasetMaintenanceWindowList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowList">DataIonoscloudInmemorydbReplicasetMaintenanceWindowList</a>

---

##### `persistenceMode`<sup>Required</sup> <a name="persistenceMode" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.persistenceMode"></a>

```typescript
public readonly persistenceMode: string;
```

- *Type:* string

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.resources"></a>

```typescript
public readonly resources: DataIonoscloudInmemorydbReplicasetResourcesList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesList">DataIonoscloudInmemorydbReplicasetResourcesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.timeouts"></a>

```typescript
public readonly timeouts: DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference">DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataIonoscloudInmemorydbReplicasetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeouts">DataIonoscloudInmemorydbReplicasetTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicaset.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudInmemorydbReplicasetConfig <a name="DataIonoscloudInmemorydbReplicasetConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConfig.Initializer"></a>

```typescript
import { dataIonoscloudInmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

const dataIonoscloudInmemorydbReplicasetConfig: dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConfig.property.displayName">displayName</a></code> | <code>string</code> | The display name of the InMemoryDB Replicaset. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConfig.property.id">id</a></code> | <code>string</code> | The ID of the InMemoryDB Replicaset. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConfig.property.location">location</a></code> | <code>string</code> | The replica set location. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeouts">DataIonoscloudInmemorydbReplicasetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The display name of the InMemoryDB Replicaset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.19/docs/data-sources/inmemorydb_replicaset#display_name DataIonoscloudInmemorydbReplicaset#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The ID of the InMemoryDB Replicaset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.19/docs/data-sources/inmemorydb_replicaset#id DataIonoscloudInmemorydbReplicaset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The replica set location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.19/docs/data-sources/inmemorydb_replicaset#location DataIonoscloudInmemorydbReplicaset#location}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataIonoscloudInmemorydbReplicasetTimeouts;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeouts">DataIonoscloudInmemorydbReplicasetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.19/docs/data-sources/inmemorydb_replicaset#timeouts DataIonoscloudInmemorydbReplicaset#timeouts}

---

### DataIonoscloudInmemorydbReplicasetConnections <a name="DataIonoscloudInmemorydbReplicasetConnections" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnections.Initializer"></a>

```typescript
import { dataIonoscloudInmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

const dataIonoscloudInmemorydbReplicasetConnections: dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnections = { ... }
```


### DataIonoscloudInmemorydbReplicasetCredentials <a name="DataIonoscloudInmemorydbReplicasetCredentials" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentials.Initializer"></a>

```typescript
import { dataIonoscloudInmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

const dataIonoscloudInmemorydbReplicasetCredentials: dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentials = { ... }
```


### DataIonoscloudInmemorydbReplicasetMaintenanceWindow <a name="DataIonoscloudInmemorydbReplicasetMaintenanceWindow" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindow.Initializer"></a>

```typescript
import { dataIonoscloudInmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

const dataIonoscloudInmemorydbReplicasetMaintenanceWindow: dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindow = { ... }
```


### DataIonoscloudInmemorydbReplicasetResources <a name="DataIonoscloudInmemorydbReplicasetResources" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResources.Initializer"></a>

```typescript
import { dataIonoscloudInmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

const dataIonoscloudInmemorydbReplicasetResources: dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResources = { ... }
```


### DataIonoscloudInmemorydbReplicasetTimeouts <a name="DataIonoscloudInmemorydbReplicasetTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeouts.Initializer"></a>

```typescript
import { dataIonoscloudInmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

const dataIonoscloudInmemorydbReplicasetTimeouts: dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.19/docs/data-sources/inmemorydb_replicaset#create DataIonoscloudInmemorydbReplicaset#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.19/docs/data-sources/inmemorydb_replicaset#default DataIonoscloudInmemorydbReplicaset#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.19/docs/data-sources/inmemorydb_replicaset#delete DataIonoscloudInmemorydbReplicaset#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.19/docs/data-sources/inmemorydb_replicaset#update DataIonoscloudInmemorydbReplicaset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.19/docs/data-sources/inmemorydb_replicaset#create DataIonoscloudInmemorydbReplicaset#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.19/docs/data-sources/inmemorydb_replicaset#default DataIonoscloudInmemorydbReplicaset#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.19/docs/data-sources/inmemorydb_replicaset#delete DataIonoscloudInmemorydbReplicaset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.19/docs/data-sources/inmemorydb_replicaset#update DataIonoscloudInmemorydbReplicaset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudInmemorydbReplicasetConnectionsList <a name="DataIonoscloudInmemorydbReplicasetConnectionsList" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsList.Initializer"></a>

```typescript
import { dataIonoscloudInmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

new dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsList.get"></a>

```typescript
public get(index: number): DataIonoscloudInmemorydbReplicasetConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataIonoscloudInmemorydbReplicasetConnectionsOutputReference <a name="DataIonoscloudInmemorydbReplicasetConnectionsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudInmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

new dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.property.datacenterId">datacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.property.lanId">lanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnections">DataIonoscloudInmemorydbReplicasetConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

---

##### `lanId`<sup>Required</sup> <a name="lanId" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.property.lanId"></a>

```typescript
public readonly lanId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataIonoscloudInmemorydbReplicasetConnections;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetConnections">DataIonoscloudInmemorydbReplicasetConnections</a>

---


### DataIonoscloudInmemorydbReplicasetCredentialsList <a name="DataIonoscloudInmemorydbReplicasetCredentialsList" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsList.Initializer"></a>

```typescript
import { dataIonoscloudInmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

new dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsList.get"></a>

```typescript
public get(index: number): DataIonoscloudInmemorydbReplicasetCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataIonoscloudInmemorydbReplicasetCredentialsOutputReference <a name="DataIonoscloudInmemorydbReplicasetCredentialsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudInmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

new dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentials">DataIonoscloudInmemorydbReplicasetCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataIonoscloudInmemorydbReplicasetCredentials;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetCredentials">DataIonoscloudInmemorydbReplicasetCredentials</a>

---


### DataIonoscloudInmemorydbReplicasetMaintenanceWindowList <a name="DataIonoscloudInmemorydbReplicasetMaintenanceWindowList" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowList.Initializer"></a>

```typescript
import { dataIonoscloudInmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

new dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowList.get"></a>

```typescript
public get(index: number): DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference <a name="DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudInmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

new dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.property.dayOfTheWeek">dayOfTheWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindow">DataIonoscloudInmemorydbReplicasetMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfTheWeek`<sup>Required</sup> <a name="dayOfTheWeek" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.property.dayOfTheWeek"></a>

```typescript
public readonly dayOfTheWeek: string;
```

- *Type:* string

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataIonoscloudInmemorydbReplicasetMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetMaintenanceWindow">DataIonoscloudInmemorydbReplicasetMaintenanceWindow</a>

---


### DataIonoscloudInmemorydbReplicasetResourcesList <a name="DataIonoscloudInmemorydbReplicasetResourcesList" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesList.Initializer"></a>

```typescript
import { dataIonoscloudInmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

new dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesList.get"></a>

```typescript
public get(index: number): DataIonoscloudInmemorydbReplicasetResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataIonoscloudInmemorydbReplicasetResourcesOutputReference <a name="DataIonoscloudInmemorydbReplicasetResourcesOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudInmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

new dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.property.cores">cores</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.property.ram">ram</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.property.storage">storage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResources">DataIonoscloudInmemorydbReplicasetResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.property.cores"></a>

```typescript
public readonly cores: number;
```

- *Type:* number

---

##### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.property.ram"></a>

```typescript
public readonly ram: number;
```

- *Type:* number

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.property.storage"></a>

```typescript
public readonly storage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataIonoscloudInmemorydbReplicasetResources;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetResources">DataIonoscloudInmemorydbReplicasetResources</a>

---


### DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference <a name="DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudInmemorydbReplicaset } from '@cdktf/provider-ionoscloud'

new dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeouts">DataIonoscloudInmemorydbReplicasetTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataIonoscloudInmemorydbReplicasetTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataIonoscloudInmemorydbReplicaset.DataIonoscloudInmemorydbReplicasetTimeouts">DataIonoscloudInmemorydbReplicasetTimeouts</a>

---



