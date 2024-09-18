# `dataIonoscloudK8SNodePool` Submodule <a name="`dataIonoscloudK8SNodePool` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudK8SNodePool <a name="DataIonoscloudK8SNodePool" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/k8s_node_pool ionoscloud_k8s_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.Initializer"></a>

```typescript
import { dataIonoscloudK8SNodePool } from '@cdktf/provider-ionoscloud'

new dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool(scope: Construct, id: string, config: DataIonoscloudK8SNodePoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolConfig">DataIonoscloudK8SNodePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolConfig">DataIonoscloudK8SNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.putTimeouts"></a>

```typescript
public putTimeouts(value: DataIonoscloudK8SNodePoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeouts">DataIonoscloudK8SNodePoolTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudK8SNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.isConstruct"></a>

```typescript
import { dataIonoscloudK8SNodePool } from '@cdktf/provider-ionoscloud'

dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.isTerraformElement"></a>

```typescript
import { dataIonoscloudK8SNodePool } from '@cdktf/provider-ionoscloud'

dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.isTerraformDataSource"></a>

```typescript
import { dataIonoscloudK8SNodePool } from '@cdktf/provider-ionoscloud'

dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.generateConfigForImport"></a>

```typescript
import { dataIonoscloudK8SNodePool } from '@cdktf/provider-ionoscloud'

dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataIonoscloudK8SNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataIonoscloudK8SNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataIonoscloudK8SNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/k8s_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudK8SNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.annotations">annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.autoScaling">autoScaling</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingList">DataIonoscloudK8SNodePoolAutoScalingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.availableUpgradeVersions">availableUpgradeVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.coresCount">coresCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.cpuFamily">cpuFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.datacenterId">datacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.k8SVersion">k8SVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.lans">lans</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansList">DataIonoscloudK8SNodePoolLansList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowList">DataIonoscloudK8SNodePoolMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.publicIps">publicIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.ramSize">ramSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.storageSize">storageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference">DataIonoscloudK8SNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.k8SClusterIdInput">k8SClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeouts">DataIonoscloudK8SNodePoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.k8SClusterId">k8SClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.annotations"></a>

```typescript
public readonly annotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `autoScaling`<sup>Required</sup> <a name="autoScaling" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.autoScaling"></a>

```typescript
public readonly autoScaling: DataIonoscloudK8SNodePoolAutoScalingList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingList">DataIonoscloudK8SNodePoolAutoScalingList</a>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `availableUpgradeVersions`<sup>Required</sup> <a name="availableUpgradeVersions" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.availableUpgradeVersions"></a>

```typescript
public readonly availableUpgradeVersions: string[];
```

- *Type:* string[]

---

##### `coresCount`<sup>Required</sup> <a name="coresCount" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.coresCount"></a>

```typescript
public readonly coresCount: number;
```

- *Type:* number

---

##### `cpuFamily`<sup>Required</sup> <a name="cpuFamily" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.cpuFamily"></a>

```typescript
public readonly cpuFamily: string;
```

- *Type:* string

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

---

##### `k8SVersion`<sup>Required</sup> <a name="k8SVersion" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.k8SVersion"></a>

```typescript
public readonly k8SVersion: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `lans`<sup>Required</sup> <a name="lans" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.lans"></a>

```typescript
public readonly lans: DataIonoscloudK8SNodePoolLansList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansList">DataIonoscloudK8SNodePoolLansList</a>

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: DataIonoscloudK8SNodePoolMaintenanceWindowList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowList">DataIonoscloudK8SNodePoolMaintenanceWindowList</a>

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `publicIps`<sup>Required</sup> <a name="publicIps" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.publicIps"></a>

```typescript
public readonly publicIps: string[];
```

- *Type:* string[]

---

##### `ramSize`<sup>Required</sup> <a name="ramSize" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.ramSize"></a>

```typescript
public readonly ramSize: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `storageSize`<sup>Required</sup> <a name="storageSize" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.storageSize"></a>

```typescript
public readonly storageSize: number;
```

- *Type:* number

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.timeouts"></a>

```typescript
public readonly timeouts: DataIonoscloudK8SNodePoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference">DataIonoscloudK8SNodePoolTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `k8SClusterIdInput`<sup>Optional</sup> <a name="k8SClusterIdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.k8SClusterIdInput"></a>

```typescript
public readonly k8SClusterIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataIonoscloudK8SNodePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeouts">DataIonoscloudK8SNodePoolTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `k8SClusterId`<sup>Required</sup> <a name="k8SClusterId" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.k8SClusterId"></a>

```typescript
public readonly k8SClusterId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudK8SNodePoolAutoScaling <a name="DataIonoscloudK8SNodePoolAutoScaling" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScaling.Initializer"></a>

```typescript
import { dataIonoscloudK8SNodePool } from '@cdktf/provider-ionoscloud'

const dataIonoscloudK8SNodePoolAutoScaling: dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScaling = { ... }
```


### DataIonoscloudK8SNodePoolConfig <a name="DataIonoscloudK8SNodePoolConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolConfig.Initializer"></a>

```typescript
import { dataIonoscloudK8SNodePool } from '@cdktf/provider-ionoscloud'

const dataIonoscloudK8SNodePoolConfig: dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolConfig.property.k8SClusterId">k8SClusterId</a></code> | <code>string</code> | The UUID of an existing kubernetes cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/k8s_node_pool#id DataIonoscloudK8SNodePool#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolConfig.property.name">name</a></code> | <code>string</code> | The desired name for the node pool. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeouts">DataIonoscloudK8SNodePoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `k8SClusterId`<sup>Required</sup> <a name="k8SClusterId" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolConfig.property.k8SClusterId"></a>

```typescript
public readonly k8SClusterId: string;
```

- *Type:* string

The UUID of an existing kubernetes cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/k8s_node_pool#k8s_cluster_id DataIonoscloudK8SNodePool#k8s_cluster_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/k8s_node_pool#id DataIonoscloudK8SNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The desired name for the node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/k8s_node_pool#name DataIonoscloudK8SNodePool#name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataIonoscloudK8SNodePoolTimeouts;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeouts">DataIonoscloudK8SNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/k8s_node_pool#timeouts DataIonoscloudK8SNodePool#timeouts}

---

### DataIonoscloudK8SNodePoolLans <a name="DataIonoscloudK8SNodePoolLans" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLans"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLans.Initializer"></a>

```typescript
import { dataIonoscloudK8SNodePool } from '@cdktf/provider-ionoscloud'

const dataIonoscloudK8SNodePoolLans: dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLans = { ... }
```


### DataIonoscloudK8SNodePoolLansRoutes <a name="DataIonoscloudK8SNodePoolLansRoutes" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutes.Initializer"></a>

```typescript
import { dataIonoscloudK8SNodePool } from '@cdktf/provider-ionoscloud'

const dataIonoscloudK8SNodePoolLansRoutes: dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutes = { ... }
```


### DataIonoscloudK8SNodePoolMaintenanceWindow <a name="DataIonoscloudK8SNodePoolMaintenanceWindow" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindow.Initializer"></a>

```typescript
import { dataIonoscloudK8SNodePool } from '@cdktf/provider-ionoscloud'

const dataIonoscloudK8SNodePoolMaintenanceWindow: dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindow = { ... }
```


### DataIonoscloudK8SNodePoolTimeouts <a name="DataIonoscloudK8SNodePoolTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeouts.Initializer"></a>

```typescript
import { dataIonoscloudK8SNodePool } from '@cdktf/provider-ionoscloud'

const dataIonoscloudK8SNodePoolTimeouts: dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/k8s_node_pool#create DataIonoscloudK8SNodePool#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/k8s_node_pool#default DataIonoscloudK8SNodePool#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/k8s_node_pool#delete DataIonoscloudK8SNodePool#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/k8s_node_pool#update DataIonoscloudK8SNodePool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/k8s_node_pool#create DataIonoscloudK8SNodePool#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/k8s_node_pool#default DataIonoscloudK8SNodePool#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/k8s_node_pool#delete DataIonoscloudK8SNodePool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.5/docs/data-sources/k8s_node_pool#update DataIonoscloudK8SNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudK8SNodePoolAutoScalingList <a name="DataIonoscloudK8SNodePoolAutoScalingList" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingList.Initializer"></a>

```typescript
import { dataIonoscloudK8SNodePool } from '@cdktf/provider-ionoscloud'

new dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingList.get"></a>

```typescript
public get(index: number): DataIonoscloudK8SNodePoolAutoScalingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataIonoscloudK8SNodePoolAutoScalingOutputReference <a name="DataIonoscloudK8SNodePoolAutoScalingOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudK8SNodePool } from '@cdktf/provider-ionoscloud'

new dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.property.maxNodeCount">maxNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.property.minNodeCount">minNodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScaling">DataIonoscloudK8SNodePoolAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxNodeCount`<sup>Required</sup> <a name="maxNodeCount" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.property.maxNodeCount"></a>

```typescript
public readonly maxNodeCount: number;
```

- *Type:* number

---

##### `minNodeCount`<sup>Required</sup> <a name="minNodeCount" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.property.minNodeCount"></a>

```typescript
public readonly minNodeCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataIonoscloudK8SNodePoolAutoScaling;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolAutoScaling">DataIonoscloudK8SNodePoolAutoScaling</a>

---


### DataIonoscloudK8SNodePoolLansList <a name="DataIonoscloudK8SNodePoolLansList" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansList.Initializer"></a>

```typescript
import { dataIonoscloudK8SNodePool } from '@cdktf/provider-ionoscloud'

new dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansList.get"></a>

```typescript
public get(index: number): DataIonoscloudK8SNodePoolLansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataIonoscloudK8SNodePoolLansOutputReference <a name="DataIonoscloudK8SNodePoolLansOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudK8SNodePool } from '@cdktf/provider-ionoscloud'

new dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.property.dhcp">dhcp</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.property.routes">routes</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesList">DataIonoscloudK8SNodePoolLansRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLans">DataIonoscloudK8SNodePoolLans</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dhcp`<sup>Required</sup> <a name="dhcp" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.property.dhcp"></a>

```typescript
public readonly dhcp: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `routes`<sup>Required</sup> <a name="routes" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.property.routes"></a>

```typescript
public readonly routes: DataIonoscloudK8SNodePoolLansRoutesList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesList">DataIonoscloudK8SNodePoolLansRoutesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataIonoscloudK8SNodePoolLans;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLans">DataIonoscloudK8SNodePoolLans</a>

---


### DataIonoscloudK8SNodePoolLansRoutesList <a name="DataIonoscloudK8SNodePoolLansRoutesList" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesList.Initializer"></a>

```typescript
import { dataIonoscloudK8SNodePool } from '@cdktf/provider-ionoscloud'

new dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesList.get"></a>

```typescript
public get(index: number): DataIonoscloudK8SNodePoolLansRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataIonoscloudK8SNodePoolLansRoutesOutputReference <a name="DataIonoscloudK8SNodePoolLansRoutesOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudK8SNodePool } from '@cdktf/provider-ionoscloud'

new dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.property.gatewayIp">gatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutes">DataIonoscloudK8SNodePoolLansRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gatewayIp`<sup>Required</sup> <a name="gatewayIp" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.property.gatewayIp"></a>

```typescript
public readonly gatewayIp: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataIonoscloudK8SNodePoolLansRoutes;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolLansRoutes">DataIonoscloudK8SNodePoolLansRoutes</a>

---


### DataIonoscloudK8SNodePoolMaintenanceWindowList <a name="DataIonoscloudK8SNodePoolMaintenanceWindowList" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowList.Initializer"></a>

```typescript
import { dataIonoscloudK8SNodePool } from '@cdktf/provider-ionoscloud'

new dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowList.get"></a>

```typescript
public get(index: number): DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference <a name="DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudK8SNodePool } from '@cdktf/provider-ionoscloud'

new dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.property.dayOfTheWeek">dayOfTheWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindow">DataIonoscloudK8SNodePoolMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfTheWeek`<sup>Required</sup> <a name="dayOfTheWeek" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.property.dayOfTheWeek"></a>

```typescript
public readonly dayOfTheWeek: string;
```

- *Type:* string

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataIonoscloudK8SNodePoolMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolMaintenanceWindow">DataIonoscloudK8SNodePoolMaintenanceWindow</a>

---


### DataIonoscloudK8SNodePoolTimeoutsOutputReference <a name="DataIonoscloudK8SNodePoolTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudK8SNodePool } from '@cdktf/provider-ionoscloud'

new dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeouts">DataIonoscloudK8SNodePoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataIonoscloudK8SNodePoolTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataIonoscloudK8SNodePool.DataIonoscloudK8SNodePoolTimeouts">DataIonoscloudK8SNodePoolTimeouts</a>

---



