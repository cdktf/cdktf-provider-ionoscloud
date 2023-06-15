# `data_ionoscloud_dataplatform_node_pools`

Refer to the Terraform Registory for docs: [`data_ionoscloud_dataplatform_node_pools`](https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/data-sources/dataplatform_node_pools).

# `dataIonoscloudDataplatformNodePools` Submodule <a name="`dataIonoscloudDataplatformNodePools` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudDataplatformNodePools <a name="DataIonoscloudDataplatformNodePools" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/data-sources/dataplatform_node_pools ionoscloud_dataplatform_node_pools}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.Initializer"></a>

```typescript
import { dataIonoscloudDataplatformNodePools } from '@cdktf/provider-ionoscloud'

new dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools(scope: Construct, id: string, config: DataIonoscloudDataplatformNodePoolsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig">DataIonoscloudDataplatformNodePoolsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig">DataIonoscloudDataplatformNodePoolsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.resetPartialMatch">resetPartialMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.putTimeouts"></a>

```typescript
public putTimeouts(value: DataIonoscloudDataplatformNodePoolsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeouts">DataIonoscloudDataplatformNodePoolsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPartialMatch` <a name="resetPartialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.resetPartialMatch"></a>

```typescript
public resetPartialMatch(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.isConstruct"></a>

```typescript
import { dataIonoscloudDataplatformNodePools } from '@cdktf/provider-ionoscloud'

dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.isTerraformElement"></a>

```typescript
import { dataIonoscloudDataplatformNodePools } from '@cdktf/provider-ionoscloud'

dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.isTerraformDataSource"></a>

```typescript
import { dataIonoscloudDataplatformNodePools } from '@cdktf/provider-ionoscloud'

dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.nodePools">nodePools</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsList">DataIonoscloudDataplatformNodePoolsNodePoolsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference">DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.clusterIdInput">clusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.partialMatchInput">partialMatchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeouts">DataIonoscloudDataplatformNodePoolsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.partialMatch">partialMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `nodePools`<sup>Required</sup> <a name="nodePools" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.nodePools"></a>

```typescript
public readonly nodePools: DataIonoscloudDataplatformNodePoolsNodePoolsList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsList">DataIonoscloudDataplatformNodePoolsNodePoolsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.timeouts"></a>

```typescript
public readonly timeouts: DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference">DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference</a>

---

##### `clusterIdInput`<sup>Optional</sup> <a name="clusterIdInput" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.clusterIdInput"></a>

```typescript
public readonly clusterIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `partialMatchInput`<sup>Optional</sup> <a name="partialMatchInput" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.partialMatchInput"></a>

```typescript
public readonly partialMatchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataIonoscloudDataplatformNodePoolsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeouts">DataIonoscloudDataplatformNodePoolsTimeouts</a> | cdktf.IResolvable

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `partialMatch`<sup>Required</sup> <a name="partialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.partialMatch"></a>

```typescript
public readonly partialMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePools.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudDataplatformNodePoolsConfig <a name="DataIonoscloudDataplatformNodePoolsConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig.Initializer"></a>

```typescript
import { dataIonoscloudDataplatformNodePools } from '@cdktf/provider-ionoscloud'

const dataIonoscloudDataplatformNodePoolsConfig: dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig.property.clusterId">clusterId</a></code> | <code>string</code> | The UUID of an existing Dataplatform cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/data-sources/dataplatform_node_pools#id DataIonoscloudDataplatformNodePools#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig.property.name">name</a></code> | <code>string</code> | The name of your node pool. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig.property.partialMatch">partialMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether partial matching is allowed or not when using name argument. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeouts">DataIonoscloudDataplatformNodePoolsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

The UUID of an existing Dataplatform cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/data-sources/dataplatform_node_pools#cluster_id DataIonoscloudDataplatformNodePools#cluster_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/data-sources/dataplatform_node_pools#id DataIonoscloudDataplatformNodePools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of your node pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/data-sources/dataplatform_node_pools#name DataIonoscloudDataplatformNodePools#name}

---

##### `partialMatch`<sup>Optional</sup> <a name="partialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig.property.partialMatch"></a>

```typescript
public readonly partialMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether partial matching is allowed or not when using name argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/data-sources/dataplatform_node_pools#partial_match DataIonoscloudDataplatformNodePools#partial_match}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataIonoscloudDataplatformNodePoolsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeouts">DataIonoscloudDataplatformNodePoolsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/data-sources/dataplatform_node_pools#timeouts DataIonoscloudDataplatformNodePools#timeouts}

---

### DataIonoscloudDataplatformNodePoolsNodePools <a name="DataIonoscloudDataplatformNodePoolsNodePools" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePools"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePools.Initializer"></a>

```typescript
import { dataIonoscloudDataplatformNodePools } from '@cdktf/provider-ionoscloud'

const dataIonoscloudDataplatformNodePoolsNodePools: dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePools = { ... }
```


### DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindow <a name="DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindow" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindow.Initializer"></a>

```typescript
import { dataIonoscloudDataplatformNodePools } from '@cdktf/provider-ionoscloud'

const dataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindow: dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindow = { ... }
```


### DataIonoscloudDataplatformNodePoolsTimeouts <a name="DataIonoscloudDataplatformNodePoolsTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeouts.Initializer"></a>

```typescript
import { dataIonoscloudDataplatformNodePools } from '@cdktf/provider-ionoscloud'

const dataIonoscloudDataplatformNodePoolsTimeouts: dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/data-sources/dataplatform_node_pools#create DataIonoscloudDataplatformNodePools#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/data-sources/dataplatform_node_pools#default DataIonoscloudDataplatformNodePools#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/data-sources/dataplatform_node_pools#delete DataIonoscloudDataplatformNodePools#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/data-sources/dataplatform_node_pools#update DataIonoscloudDataplatformNodePools#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/data-sources/dataplatform_node_pools#create DataIonoscloudDataplatformNodePools#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/data-sources/dataplatform_node_pools#default DataIonoscloudDataplatformNodePools#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/data-sources/dataplatform_node_pools#delete DataIonoscloudDataplatformNodePools#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.0/docs/data-sources/dataplatform_node_pools#update DataIonoscloudDataplatformNodePools#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudDataplatformNodePoolsNodePoolsList <a name="DataIonoscloudDataplatformNodePoolsNodePoolsList" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsList.Initializer"></a>

```typescript
import { dataIonoscloudDataplatformNodePools } from '@cdktf/provider-ionoscloud'

new dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsList.get"></a>

```typescript
public get(index: number): DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList <a name="DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList.Initializer"></a>

```typescript
import { dataIonoscloudDataplatformNodePools } from '@cdktf/provider-ionoscloud'

new dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList.get"></a>

```typescript
public get(index: number): DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference <a name="DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudDataplatformNodePools } from '@cdktf/provider-ionoscloud'

new dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.property.dayOfTheWeek">dayOfTheWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.property.time">time</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindow">DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfTheWeek`<sup>Required</sup> <a name="dayOfTheWeek" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.property.dayOfTheWeek"></a>

```typescript
public readonly dayOfTheWeek: string;
```

- *Type:* string

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.property.time"></a>

```typescript
public readonly time: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindow">DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindow</a>

---


### DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference <a name="DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudDataplatformNodePools } from '@cdktf/provider-ionoscloud'

new dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.annotations">annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.coresCount">coresCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.cpuFamily">cpuFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.datacenterId">datacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.labels">labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList">DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.nodeCount">nodeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.ramSize">ramSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.storageSize">storageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePools">DataIonoscloudDataplatformNodePoolsNodePools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.annotations"></a>

```typescript
public readonly annotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `coresCount`<sup>Required</sup> <a name="coresCount" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.coresCount"></a>

```typescript
public readonly coresCount: number;
```

- *Type:* number

---

##### `cpuFamily`<sup>Required</sup> <a name="cpuFamily" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.cpuFamily"></a>

```typescript
public readonly cpuFamily: string;
```

- *Type:* string

---

##### `datacenterId`<sup>Required</sup> <a name="datacenterId" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.datacenterId"></a>

```typescript
public readonly datacenterId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList">DataIonoscloudDataplatformNodePoolsNodePoolsMaintenanceWindowList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.nodeCount"></a>

```typescript
public readonly nodeCount: number;
```

- *Type:* number

---

##### `ramSize`<sup>Required</sup> <a name="ramSize" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.ramSize"></a>

```typescript
public readonly ramSize: number;
```

- *Type:* number

---

##### `storageSize`<sup>Required</sup> <a name="storageSize" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.storageSize"></a>

```typescript
public readonly storageSize: number;
```

- *Type:* number

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePoolsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataIonoscloudDataplatformNodePoolsNodePools;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsNodePools">DataIonoscloudDataplatformNodePoolsNodePools</a>

---


### DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference <a name="DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudDataplatformNodePools } from '@cdktf/provider-ionoscloud'

new dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeouts">DataIonoscloudDataplatformNodePoolsTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataIonoscloudDataplatformNodePoolsTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudDataplatformNodePools.DataIonoscloudDataplatformNodePoolsTimeouts">DataIonoscloudDataplatformNodePoolsTimeouts</a> | cdktf.IResolvable

---



