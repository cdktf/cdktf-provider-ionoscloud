# `dataIonoscloudObjectStorageRegion` Submodule <a name="`dataIonoscloudObjectStorageRegion` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudObjectStorageRegion <a name="DataIonoscloudObjectStorageRegion" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/object_storage_region ionoscloud_object_storage_region}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.Initializer"></a>

```typescript
import { dataIonoscloudObjectStorageRegion } from '@cdktf/provider-ionoscloud'

new dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion(scope: Construct, id: string, config: DataIonoscloudObjectStorageRegionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionConfig">DataIonoscloudObjectStorageRegionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionConfig">DataIonoscloudObjectStorageRegionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudObjectStorageRegion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.isConstruct"></a>

```typescript
import { dataIonoscloudObjectStorageRegion } from '@cdktf/provider-ionoscloud'

dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.isTerraformElement"></a>

```typescript
import { dataIonoscloudObjectStorageRegion } from '@cdktf/provider-ionoscloud'

dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.isTerraformDataSource"></a>

```typescript
import { dataIonoscloudObjectStorageRegion } from '@cdktf/provider-ionoscloud'

dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.generateConfigForImport"></a>

```typescript
import { dataIonoscloudObjectStorageRegion } from '@cdktf/provider-ionoscloud'

dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataIonoscloudObjectStorageRegion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataIonoscloudObjectStorageRegion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataIonoscloudObjectStorageRegion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/object_storage_region#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudObjectStorageRegion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.capability">capability</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference">DataIonoscloudObjectStorageRegionCapabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.storageClasses">storageClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.version">version</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.website">website</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `capability`<sup>Required</sup> <a name="capability" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.capability"></a>

```typescript
public readonly capability: DataIonoscloudObjectStorageRegionCapabilityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference">DataIonoscloudObjectStorageRegionCapabilityOutputReference</a>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `storageClasses`<sup>Required</sup> <a name="storageClasses" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.storageClasses"></a>

```typescript
public readonly storageClasses: string[];
```

- *Type:* string[]

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

##### `website`<sup>Required</sup> <a name="website" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.website"></a>

```typescript
public readonly website: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudObjectStorageRegionCapability <a name="DataIonoscloudObjectStorageRegionCapability" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapability"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapability.Initializer"></a>

```typescript
import { dataIonoscloudObjectStorageRegion } from '@cdktf/provider-ionoscloud'

const dataIonoscloudObjectStorageRegionCapability: dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapability = { ... }
```


### DataIonoscloudObjectStorageRegionConfig <a name="DataIonoscloudObjectStorageRegionConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionConfig.Initializer"></a>

```typescript
import { dataIonoscloudObjectStorageRegion } from '@cdktf/provider-ionoscloud'

const dataIonoscloudObjectStorageRegionConfig: dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionConfig.property.id">id</a></code> | <code>string</code> | The id of the region. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The id of the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/data-sources/object_storage_region#id DataIonoscloudObjectStorageRegion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudObjectStorageRegionCapabilityOutputReference <a name="DataIonoscloudObjectStorageRegionCapabilityOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudObjectStorageRegion } from '@cdktf/provider-ionoscloud'

new dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.property.iam">iam</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.property.s3Select">s3Select</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapability">DataIonoscloudObjectStorageRegionCapability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iam`<sup>Required</sup> <a name="iam" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.property.iam"></a>

```typescript
public readonly iam: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `s3Select`<sup>Required</sup> <a name="s3Select" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.property.s3Select"></a>

```typescript
public readonly s3Select: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapabilityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataIonoscloudObjectStorageRegionCapability;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudObjectStorageRegion.DataIonoscloudObjectStorageRegionCapability">DataIonoscloudObjectStorageRegionCapability</a>

---



