# `dataIonoscloudCdnDistribution` Submodule <a name="`dataIonoscloudCdnDistribution` Submodule" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataIonoscloudCdnDistribution <a name="DataIonoscloudCdnDistribution" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/cdn_distribution ionoscloud_cdn_distribution}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer"></a>

```typescript
import { dataIonoscloudCdnDistribution } from '@cdktf/provider-ionoscloud'

new dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution(scope: Construct, id: string, config?: DataIonoscloudCdnDistributionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig">DataIonoscloudCdnDistributionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig">DataIonoscloudCdnDistributionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetPartialMatch">resetPartialMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.putTimeouts"></a>

```typescript
public putTimeouts(value: DataIonoscloudCdnDistributionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts">DataIonoscloudCdnDistributionTimeouts</a>

---

##### `resetDomain` <a name="resetDomain" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPartialMatch` <a name="resetPartialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetPartialMatch"></a>

```typescript
public resetPartialMatch(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataIonoscloudCdnDistribution resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isConstruct"></a>

```typescript
import { dataIonoscloudCdnDistribution } from '@cdktf/provider-ionoscloud'

dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isTerraformElement"></a>

```typescript
import { dataIonoscloudCdnDistribution } from '@cdktf/provider-ionoscloud'

dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isTerraformDataSource"></a>

```typescript
import { dataIonoscloudCdnDistribution } from '@cdktf/provider-ionoscloud'

dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.generateConfigForImport"></a>

```typescript
import { dataIonoscloudCdnDistribution } from '@cdktf/provider-ionoscloud'

dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataIonoscloudCdnDistribution resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataIonoscloudCdnDistribution to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataIonoscloudCdnDistribution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/cdn_distribution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataIonoscloudCdnDistribution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.publicEndpointV4">publicEndpointV4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.publicEndpointV6">publicEndpointV6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.resourceUrn">resourceUrn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.routingRules">routingRules</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList">DataIonoscloudCdnDistributionRoutingRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference">DataIonoscloudCdnDistributionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.partialMatchInput">partialMatchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts">DataIonoscloudCdnDistributionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.partialMatch">partialMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `publicEndpointV4`<sup>Required</sup> <a name="publicEndpointV4" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.publicEndpointV4"></a>

```typescript
public readonly publicEndpointV4: string;
```

- *Type:* string

---

##### `publicEndpointV6`<sup>Required</sup> <a name="publicEndpointV6" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.publicEndpointV6"></a>

```typescript
public readonly publicEndpointV6: string;
```

- *Type:* string

---

##### `resourceUrn`<sup>Required</sup> <a name="resourceUrn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.resourceUrn"></a>

```typescript
public readonly resourceUrn: string;
```

- *Type:* string

---

##### `routingRules`<sup>Required</sup> <a name="routingRules" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.routingRules"></a>

```typescript
public readonly routingRules: DataIonoscloudCdnDistributionRoutingRulesList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList">DataIonoscloudCdnDistributionRoutingRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.timeouts"></a>

```typescript
public readonly timeouts: DataIonoscloudCdnDistributionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference">DataIonoscloudCdnDistributionTimeoutsOutputReference</a>

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `partialMatchInput`<sup>Optional</sup> <a name="partialMatchInput" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.partialMatchInput"></a>

```typescript
public readonly partialMatchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataIonoscloudCdnDistributionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts">DataIonoscloudCdnDistributionTimeouts</a>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `partialMatch`<sup>Required</sup> <a name="partialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.partialMatch"></a>

```typescript
public readonly partialMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistribution.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataIonoscloudCdnDistributionConfig <a name="DataIonoscloudCdnDistributionConfig" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.Initializer"></a>

```typescript
import { dataIonoscloudCdnDistribution } from '@cdktf/provider-ionoscloud'

const dataIonoscloudCdnDistributionConfig: dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.domain">domain</a></code> | <code>string</code> | The domain of the distribution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/cdn_distribution#id DataIonoscloudCdnDistribution#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.partialMatch">partialMatch</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether partial matching is allowed or not when using domain argument. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts">DataIonoscloudCdnDistributionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

The domain of the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/cdn_distribution#domain DataIonoscloudCdnDistribution#domain}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/cdn_distribution#id DataIonoscloudCdnDistribution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `partialMatch`<sup>Optional</sup> <a name="partialMatch" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.partialMatch"></a>

```typescript
public readonly partialMatch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether partial matching is allowed or not when using domain argument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/cdn_distribution#partial_match DataIonoscloudCdnDistribution#partial_match}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataIonoscloudCdnDistributionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts">DataIonoscloudCdnDistributionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/cdn_distribution#timeouts DataIonoscloudCdnDistribution#timeouts}

---

### DataIonoscloudCdnDistributionRoutingRules <a name="DataIonoscloudCdnDistributionRoutingRules" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRules.Initializer"></a>

```typescript
import { dataIonoscloudCdnDistribution } from '@cdktf/provider-ionoscloud'

const dataIonoscloudCdnDistributionRoutingRules: dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRules = { ... }
```


### DataIonoscloudCdnDistributionRoutingRulesUpstream <a name="DataIonoscloudCdnDistributionRoutingRulesUpstream" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstream.Initializer"></a>

```typescript
import { dataIonoscloudCdnDistribution } from '@cdktf/provider-ionoscloud'

const dataIonoscloudCdnDistributionRoutingRulesUpstream: dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstream = { ... }
```


### DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions <a name="DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions.Initializer"></a>

```typescript
import { dataIonoscloudCdnDistribution } from '@cdktf/provider-ionoscloud'

const dataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions: dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions = { ... }
```


### DataIonoscloudCdnDistributionTimeouts <a name="DataIonoscloudCdnDistributionTimeouts" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts.Initializer"></a>

```typescript
import { dataIonoscloudCdnDistribution } from '@cdktf/provider-ionoscloud'

const dataIonoscloudCdnDistributionTimeouts: dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/cdn_distribution#create DataIonoscloudCdnDistribution#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts.property.default">default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/cdn_distribution#default DataIonoscloudCdnDistribution#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/cdn_distribution#delete DataIonoscloudCdnDistribution#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/cdn_distribution#update DataIonoscloudCdnDistribution#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/cdn_distribution#create DataIonoscloudCdnDistribution#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/cdn_distribution#default DataIonoscloudCdnDistribution#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/cdn_distribution#delete DataIonoscloudCdnDistribution#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.7/docs/data-sources/cdn_distribution#update DataIonoscloudCdnDistribution#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataIonoscloudCdnDistributionRoutingRulesList <a name="DataIonoscloudCdnDistributionRoutingRulesList" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.Initializer"></a>

```typescript
import { dataIonoscloudCdnDistribution } from '@cdktf/provider-ionoscloud'

new dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.get"></a>

```typescript
public get(index: number): DataIonoscloudCdnDistributionRoutingRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataIonoscloudCdnDistributionRoutingRulesOutputReference <a name="DataIonoscloudCdnDistributionRoutingRulesOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudCdnDistribution } from '@cdktf/provider-ionoscloud'

new dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.upstream">upstream</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList">DataIonoscloudCdnDistributionRoutingRulesUpstreamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRules">DataIonoscloudCdnDistributionRoutingRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `upstream`<sup>Required</sup> <a name="upstream" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.upstream"></a>

```typescript
public readonly upstream: DataIonoscloudCdnDistributionRoutingRulesUpstreamList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList">DataIonoscloudCdnDistributionRoutingRulesUpstreamList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataIonoscloudCdnDistributionRoutingRules;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRules">DataIonoscloudCdnDistributionRoutingRules</a>

---


### DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList <a name="DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.Initializer"></a>

```typescript
import { dataIonoscloudCdnDistribution } from '@cdktf/provider-ionoscloud'

new dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.get"></a>

```typescript
public get(index: number): DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference <a name="DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudCdnDistribution } from '@cdktf/provider-ionoscloud'

new dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.allowList">allowList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.blockList">blockList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions">DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowList`<sup>Required</sup> <a name="allowList" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.allowList"></a>

```typescript
public readonly allowList: string[];
```

- *Type:* string[]

---

##### `blockList`<sup>Required</sup> <a name="blockList" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.blockList"></a>

```typescript
public readonly blockList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions">DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictions</a>

---


### DataIonoscloudCdnDistributionRoutingRulesUpstreamList <a name="DataIonoscloudCdnDistributionRoutingRulesUpstreamList" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.Initializer"></a>

```typescript
import { dataIonoscloudCdnDistribution } from '@cdktf/provider-ionoscloud'

new dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.get"></a>

```typescript
public get(index: number): DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference <a name="DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudCdnDistribution } from '@cdktf/provider-ionoscloud'

new dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.caching">caching</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.geoRestrictions">geoRestrictions</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList">DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.rateLimitClass">rateLimitClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.waf">waf</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstream">DataIonoscloudCdnDistributionRoutingRulesUpstream</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `caching`<sup>Required</sup> <a name="caching" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.caching"></a>

```typescript
public readonly caching: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `geoRestrictions`<sup>Required</sup> <a name="geoRestrictions" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.geoRestrictions"></a>

```typescript
public readonly geoRestrictions: DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList">DataIonoscloudCdnDistributionRoutingRulesUpstreamGeoRestrictionsList</a>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `rateLimitClass`<sup>Required</sup> <a name="rateLimitClass" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.rateLimitClass"></a>

```typescript
public readonly rateLimitClass: string;
```

- *Type:* string

---

##### `waf`<sup>Required</sup> <a name="waf" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.waf"></a>

```typescript
public readonly waf: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstreamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataIonoscloudCdnDistributionRoutingRulesUpstream;
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionRoutingRulesUpstream">DataIonoscloudCdnDistributionRoutingRulesUpstream</a>

---


### DataIonoscloudCdnDistributionTimeoutsOutputReference <a name="DataIonoscloudCdnDistributionTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataIonoscloudCdnDistribution } from '@cdktf/provider-ionoscloud'

new dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.defaultInput">defaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts">DataIonoscloudCdnDistributionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataIonoscloudCdnDistributionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-ionoscloud.dataIonoscloudCdnDistribution.DataIonoscloudCdnDistributionTimeouts">DataIonoscloudCdnDistributionTimeouts</a>

---



